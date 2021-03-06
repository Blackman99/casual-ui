import clsx from 'clsx'
import React from 'react'
import CTd from './CTd'
import CTh from './CTh'
import CTr from './CTr'

interface CustomRenderProps<T = any> {
  idx?: number
  val?: T
  field: string | number | symbol
  row: T
}

interface CustomHeaderRenderProps {
  title: string
  field: string | number | symbol
}

type CustomHeaderRender = (
  props: CustomHeaderRenderProps
) => JSX.Element | string

type CustomRender = (props: CustomRenderProps) => JSX.Element | string

interface CTableColumn<T = any, S extends keyof T = any> {
  /**
   * 列标题
   */
  title: string
  /**
   * 列对应字段名
   */
  field: S
  /**
   * 自定义单元格渲染
   */
  customRender?: CustomRender
  /**
   * 自定义表头渲染
   */
  customHeader?: CustomHeaderRender
  /**
   * 列宽
   */
  width?: string
}
interface CTableProps<
  T extends Record<string | number | symbol, any>,
  S extends keyof T
> {
  /**
   * 是否为条纹表格
   */
  striped?: boolean
  /**
   * 表格列配置
   */
  columns?: CTableColumn<T, S>[]
  /**
   * 表格数据
   */
  data?: Array<T>
  /**
   * 行数据唯一键
   */
  rowKey?: string
}

function CTable<T>({
  striped = false,
  columns = [],
  data = [],
  rowKey = 'id',
}: CTableProps<T, keyof T>) {
  return (
    <div className={clsx('c-table', striped && 'c-table--striped')}>
      <table className="c-table--table">
        <colgroup>
          {columns.map(({ field }) => (
            <col key={String(field)}></col>
          ))}
        </colgroup>
        <thead>
          <CTr>
            {columns.map(({ field, title, customHeader, width }) => (
              <CTh key={String(field)} width={width}>
                {customHeader
                  ? customHeader({
                      field,
                      title,
                    })
                  : title}
              </CTh>
            ))}
          </CTr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <CTr key={row[rowKey]}>
              {columns.map(({ field, customRender, width }) => (
                <CTd key={String(field)} width={width}>
                  {customRender
                    ? customRender({
                        row,
                        val: row[field],
                        idx,
                        field,
                      })
                    : String(row[field])}
                </CTd>
              ))}
            </CTr>
          ))}
        </tbody>
      </table>
      {data.length === 0 && <div className="c-table--no-data">No Data</div>}
    </div>
  )
}

export type { CTableProps, CTableColumn, CustomRender, CustomRenderProps }

export default CTable
