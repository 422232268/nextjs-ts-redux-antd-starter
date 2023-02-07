import React, { forwardRef, useImperativeHandle, useState, useEffect, useReducer } from 'react'
import { Form, Input, Select, InputNumber, Table, Button, message } from 'antd'
import { SketchPicker } from 'react-color'
import update from 'immutability-helper'
import ItemTypes from './ItemTypes'
const { Item } = Form
const { Column } = Table;
const { Option } = Select
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const initialState = {
    tableColumn: [
        { title: '姓名', dataIndex: 'name', id: 1 }
    ],
    count: 1
}
function reducer(state, action) {
    switch (action.type) {
        case 'deleteRow':
            return update(state, {tableColumn: {$splice: [[action.index, 1]]}})
        case 'addRow':
            let count = state.count
            let obj = {title: '', dataIndex: '', id:count + 1}
            return update(state, {tableColumn: {$push: [obj]}, count: {$set: count+1}})
        case 'changeRowData':
            return update(state, {tableColumn: {[action.index]: {[action.name]: {$set: action.value}}}})
        default:
            return state
    }
}
const BasicConfig = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        clear: form.resetFields,
    }))
    const [state, dispatch] = useReducer(reducer, initialState)
    const [form] = Form.useForm();
    // const [config,setConfig] = useState({})
    const { item } = props
    const submit = () => {
        // setConfig(form.getFieldsValue(true))
        props.changeConfig(form.getFieldsValue(true));
    }
    const saveTblClm = () => {
        let tableColumn = state.tableColumn
        if (tableColumn.some(item => !item.title || !item.dataIndex)) {
            message.error('请填写完整')
        } else {
            props.changeConfig({ tableColumn: state.tableColumn, ...form.getFieldsValue(true) })
        }
    }
    const changeColor = (key, value) => {
        form.setFieldsValue({ [key]: value.hex })
        console.log('value color', value, form.getFieldsValue(true))
        submit()
    }
    useEffect(() => {
        form.resetFields()
        renderForm();
    }, [props.item]);
    const renderForm = () => {
        return (
            <Form {...layout} form={form}>
                        <div>
                        <Button type="primary" size='small' onClick={e => dispatch({ type: 'addRow' })}>添加一行</Button>
                        <Button type="primary" size='small' style={{ marginLeft: '20px' }} onClick={saveTblClm}>保存</Button>
                        <Table dataSource={state.tableColumn} size='small' pagination={{ pageSize: 20, hideOnSinglePage: true }}>
                            <Column title="列头文字" dataIndex="title" key="title" width={120}
                                render={(text, record, index) => (
                                    <Input value={text} onChange={e => dispatch({ type: 'changeRowData', name: 'title', index, value: e.target.value })} />
                                )}
                            />
                            <Column placeholder='列数据在数据项中对应的路径' title="路径" dataIndex="dataIndex" key="dataIndex" width={120}
                                render={(text, record, index) => (
                                    <Input value={text} onChange={e => dispatch({ type: 'changeRowData', name: 'dataIndex', index, value: e.target.value })} />
                                )}
                            />
                            <Column title="操作" dataIndex="operate" key="operate" width={80} render={(text, record, index) => (
                                <Button type='link' size='small' onClick={() => dispatch({ type: 'deleteRow', index })}>删除</Button>
                            )
                            } />
                        </Table>
                    </div>
            </Form>
        )
    }

    // useEffect(()=>{
    //     renderForm()
    // },[item.id])
    return (
        <div>
            {
                renderForm()
            }
        </div>
    )
})
export default BasicConfig;
