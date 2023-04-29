// createWrapper.ts

// createWrapper 重写
import { AnyAction, Store } from "@reduxjs/toolkit";
import {
  GetStaticProps,
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPropsContext,
  GetStaticPaths,
  GetStaticPathsContext,
  NextComponentType,
  NextPageContext,
} from "next";
import { ParsedUrlQuery } from "querystring";
import { Config, MakeStore, createWrapper as reduxCreateWrapper } from "next-redux-wrapper";
import { AppContext, AppInitialProps } from "next/app";

type GetInitialPageProps<P> = NextComponentType<NextPageContext, any, P>["getInitialProps"];

//FIXME Could be typeof App.getInitialProps & appGetInitialProps (not exported), see https://github.com/kirill-konshin/next-redux-wrapper/issues/412
type GetInitialAppProps<P> = ({ Component, ctx }: AppContext) => Promise<AppInitialProps & { pageProps: P }>;

// 类型声明
export type GetServerSidePropsCallback<O, P extends object = any> = (params: O) => GetServerSideProps<P>;
export type GetStaticPropsCallback<O, P extends object = any> = (params: O) => GetStaticProps<P>;
export type GetStaticPathsCallback<O, P extends ParsedUrlQuery = ParsedUrlQuery> = (params: O) => GetStaticPaths<P>;
export type AppCallback<O, P> = (params: O) => GetInitialAppProps<P>;
export type PageCallback<O, P> = (params: O) => GetInitialPageProps<P>;

// 传递给 enhanceWrapper 的参数信息，因为不同的 ctx 数据类型不一致
export type EnhanceWrapperOptions =
  | { type: "getServerSideProps"; ctx: GetServerSidePropsContext }
  | { type: "getStaticProps"; ctx: GetStaticPropsContext }
  | { type: "getInitialAppProps" | "getInitialPageProps"; ctx: NextPageContext }
  | { type: "getStaticPaths"; ctx: GetStaticPathsContext };

// enhanceWrapper 类型
export type EnhanceWrapper<R> = (options: EnhanceWrapperOptions) => R;

// 重写 createWrapper，让其拥有扩展能力
export const createWrapper = <S extends Store<any, AnyAction>, R>(
  makeStore: MakeStore<S>,
  enhanceWrapper?: EnhanceWrapper<R>,
  config?: Config<S>
) => {
  const wrapper = reduxCreateWrapper(makeStore, config);
  function getWrapperEnhanceInfo(options: EnhanceWrapperOptions) {
    return enhanceWrapper(options);
  }
  return {
    ...wrapper,
    // 增强 getServerSideProps
    getServerSideProps: <P extends object = any>(func: GetServerSidePropsCallback<R & { store: S }, P>) => {
      return wrapper.getServerSideProps((store: S) => async (ctx: GetServerSidePropsContext) => {
        return await func({ store, ...getWrapperEnhanceInfo({ type: "getServerSideProps", ctx }) })(ctx);
      });
    },
    // 增强 getStaticProps
    getStaticProps: <P extends object = any>(func: GetStaticPropsCallback<R & { store: S }, P>) => {
      return wrapper.getStaticProps((store) => async (ctx: GetStaticPropsContext) => {
        return await func({ store, ...getWrapperEnhanceInfo({ type: "getStaticProps", ctx }) })(ctx);
      });
    },
    // 增强 getStaticPaths
    getStaticPaths: <P extends ParsedUrlQuery = ParsedUrlQuery>(func: GetStaticPathsCallback<R, P>) => {
      return async (ctx: GetStaticPathsContext) => {
        return await func({ ...getWrapperEnhanceInfo({ type: "getStaticPaths", ctx }) })?.(ctx);
      };
    },
    // 增强 app getStaticProps
    getInitialAppProps: <P extends object = any>(func: AppCallback<R & { store: S }, P>) => {
      return wrapper.getInitialAppProps((store) => async (appCtx: AppContext) => {
        return await func({ store, ...getWrapperEnhanceInfo({ type: "getInitialAppProps", ctx: appCtx.ctx }) })(appCtx);
      });
    },
    // 增强 page getStaticProps
    getInitialPageProps: <P extends object = any>(func: PageCallback<R & { store: S }, P>) => {
      return wrapper.getInitialPageProps((store) => async (ctx: NextPageContext) => {
        return await func({ store, ...getWrapperEnhanceInfo({ type: "getInitialPageProps", ctx: ctx }) })?.(ctx);
      });
    },
  };
};
