import i18next from 'i18next'
import React from 'react'
import styled from 'styled-components'

import { Router } from 'next/router'

import BasisColumns from '@widgets/Columns'
import HideOrShowText from '@widgets/Columns/HideOrShowText'
import AssetCodeWithIcon from '@widgets/Columns/AssetCodeWithIcon'
import { Button as LbkButton } from '@lbank/lbank-ui'

import Space from '@widgets/Space'

import { getAllPrice } from '@utils/util'
import TradeOffButton from './TradeOffButton'

const DeleteButton = styled(LbkButton)`
  float: right;
`

/**
 * 站外提现
 * @param param0
 * @returns
 */
const getColumnsMap = ({ lgt, showPlainCodeAmount, router }: { lgt?: string; showPlainCodeAmount?: boolean; router: Router }) => ({
  assetCode: BasisColumns({
    title: i18next.t('L0000037币种'),
    key: 'assetCode',
    width: 50,
    toUpperCase: true,
    render(text, record) {
      return <AssetCodeWithIcon icon={record.assetInfo?.svg}>{text?.toUpperCase()}</AssetCodeWithIcon>
    },
  }),
  usableAmt: BasisColumns({
    title: i18next.t('L0000149可用'),
    key: 'usableAmt',
    width: 50,
    render(text) {
      return <HideOrShowText content={text} show={showPlainCodeAmount} />
    },
  }),
  freezeAmt: BasisColumns({
    title: i18next.t('L0000015冻结'),
    key: 'freezeAmt',
    width: 50,
    render(text) {
      return <HideOrShowText content={text} show={showPlainCodeAmount} />
    },
  }),
  assetAmt: BasisColumns({
    title: i18next.t('L0003572小计'),
    key: 'assetAmt',
    width: 50,
    render(text) {
      return <HideOrShowText content={text} show={showPlainCodeAmount} />
    },
  }),
  toUsd: BasisColumns({
    title: `${i18next.t('L0003568折合')}(${lgt?.toUpperCase()})`,
    key: 'toUsd',
    width: 100,
    render(val) {
      return <HideOrShowText content={(getAllPrice(val) as Record<string, string>)[(lgt as string).toLowerCase()]} show={showPlainCodeAmount} />
    },
  }),
  operation: BasisColumns({
    title: i18next.t('L0002044操作'),
    key: 'application',
    width: 50,
    render(val, record) {
      return (
        <Space>
          <DeleteButton
            onClick={() => router.push(`/wallet/account/main/withdrawal/crypto/${record.assetCode}`)}
            disabled={!(record.stationDrawSwitch || record.drawSwitch)}
            size="small"
          >
            {i18next.t('L0000154提现')}
          </DeleteButton>
          <DeleteButton onClick={() => router.push(`/wallet/account/main/deposit/crypto/${record.assetCode}`)} disabled={!record.depositSwitch} size="small">
            {i18next.t('L0000155充值')}
          </DeleteButton>
          {/* 交易 */}
          <TradeOffButton trades={record.trades} />

          {record.compoundInterestAnnualYield && (
            <DeleteButton onClick={() => window.open(`/locking-loan-current.html?id=${record.currentFinancingId}`, '_blank')} size="small">
              {i18next.t('L0001679挖矿')}
            </DeleteButton>
          )}
        </Space>
      )
    },
  }),
})

export default getColumnsMap
