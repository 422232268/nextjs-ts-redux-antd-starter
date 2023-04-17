import React, { useState, useRef, useEffect, useCallback } from "react"
import { Editor } from "@tinymce/tinymce-react"

const Index = ({ image_upload_handler, editorRef }) => {
  return (
    <Editor
      onInit={(evt, editor) => (editorRef.current = editor)}
      initialValue="<p>我爱你中国</p>"
      /*onEditorChange={(content) => setHtml(content)}*/
      apiKey="56j4yy533193byjwakambd6wh8jiaq3mjxpvkbcd674vfm2y"
      cloudChannel="dev"
      init={{
        language: "zh_CN",
        language_url: "/langs/zh_CN.js",
        height: 500,
        menubar: false,
        statusbar: false,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks fullscreen",
          "insertdatetime media table code help ",
        ],
        toolbar:
          "undo redo | formatselect | " +
          "bold italic backcolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent charmap | " +
          "image media removeformat table | preview code fullscreen ",

        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",

        images_upload_handler: image_upload_handler,
      }}
    />
  )
}

export default Index
