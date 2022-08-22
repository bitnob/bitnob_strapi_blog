import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const Editor = ({ onChange, name, value }) => {

    const quillStyle = {
       minHeight: `${300 / 16}em`,
       backgroundColor: "#fff",
      }

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link'],
            ['clean']
        ],
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ]
    return (
        <div style={quillStyle}>
            <ReactQuill
            theme="snow"
            value={value}
            modules={modules}
            formats={formats}
            onChange={(content, event, editor) => {
                onChange({ target: { name, value: content } });
            }}
        />
        </div>
    );
};
export default Editor;