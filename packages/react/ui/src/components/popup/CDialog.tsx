import { CSlot, PositionGroup } from 'casual-types'
import { matClose } from '@quasar/extras/material-icons'
import clsx from 'clsx'
import React, { CSSProperties, useEffect } from 'react'
import CButton from '../basic/button/CButton'
import CIcon from '../basic/icon/CIcon'
import CPopup from './CPopup'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import { useMemo } from 'react'

interface CDialogProps {
  /**
   * 对话框是否打开
   */
  value: boolean
  /**
   * 打开/关闭触发
   */
  onChange?: (newValue: boolean) => void
  /**
   * 标题
   */
  title?: string
  /**
   * 自定义标题
   */
  customTitle?: CSlot
  /**
   * 宽度
   */
  width?: string
  /**
   * 对话框体高度
   */
  bodyHeight?: string
  /**
   * 是否具有内容内边距
   */
  bodyPadding?: boolean
  /**
   * 是否表现为圆角
   */
  rounded?: boolean
  /**
   * 是否展示关闭图标
   */
  closeIcon?: boolean
  /**
   * 水平对齐方式
   */
  horizontalAlign?: 'start' | 'center' | 'end'
  /**
   * 垂直对齐方式
   */
  verticalAlign?: 'start' | 'center' | 'end'
  /**
   * 自定义对话框DOM样式类
   */
  customClass?: string
  /**
   * 自定义对话框DOM样式
   */
  customStyle?: CSSProperties
  /**
   * 是否展示取消按钮
   */
  showCancelBtn?: boolean
  /**
   * 取消按钮文字
   */
  cancelBtnLabel?: string
  /**
   * 是否展示确认按钮
   */
  showConfirmBtn?: boolean
  /**
   * 确认按钮文字
   */
  confirmBtnLabel?: string
  /**
   * 自定义头部内容
   */
  customHeader?: CSlot
  /**
   * 自定义关闭图标
   */
  customCloseIcon?: CSlot
  /**
   * 对话框内容
   */
  children: CSlot
  /**
   * 自定义底部
   */
  customFooter?: CSlot
  /**
   * 自定义底部操作按钮
   */
  customFooterActions?: CSlot
}

const CDialog = ({
  value,
  onChange,
  title = '',
  width = '480px',
  bodyHeight = 'auto',
  bodyPadding = true,
  rounded = true,
  closeIcon = true,
  horizontalAlign = 'center',
  verticalAlign = 'center',
  customClass,
  customStyle = {},
  cancelBtnLabel = 'Cancel',
  confirmBtnLabel = 'Confirm',
  showCancelBtn = false,
  showConfirmBtn = false,
  customHeader,
  customCloseIcon,
  children,
  customFooter,
  customFooterActions,
  customTitle,
}: CDialogProps) => {
  useEffect(() => {
    const listenKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && value) {
        onChange?.(false)
      }
    }
    window.addEventListener('keyup', listenKeyboard)
    return () => {
      window.removeEventListener('keyup', listenKeyboard)
    }
  }, [value])

  const getContent = (
    customContent: CSlot | undefined,
    defaultContent: CSlot
  ) => (customContent ? customContent : defaultContent)

  const roundedClass = useMemo(() => {
    const classMap = new Map<PositionGroup, string>([
      ['start start', `c-rounded-br-md`],
      ['start center', 'c-rounded-r-md'],
      ['start end', 'c-rounded-tr-md'],
      ['center start', 'c-rounded-b-md'],
      ['center center', 'c-rounded-md'],
      ['center end', 'c-rounded-t-md'],
      ['end start', 'c-rounded-bl-md'],
      ['end center', 'c-rounded-l-md'],
      ['end end', 'c-rounded-tl-md'],
    ])

    return classMap.get(`${horizontalAlign} ${verticalAlign}`) || ''
  }, [horizontalAlign, verticalAlign])

  return createPortal(
    <CPopup
      value={value}
      horizontalAlign={horizontalAlign}
      verticalAlign={verticalAlign}
      className="c-popup--dialog"
    >
      <CSSTransition
        in={value}
        timeout={300}
        classNames="c-dialog"
        unmountOnExit
      >
        <div
          className={clsx(
            'c-dialog',
            rounded && roundedClass,
            customClass && customClass
          )}
          style={{
            width,
            ...customStyle,
          }}
        >
          <div className="c-dialog--header">
            {getContent(
              customHeader,
              <>
                <div className="c-dialog--title">
                  {getContent(customTitle, title)}
                </div>
                <div
                  className="c-dialog--close-btn"
                  onClick={() => onChange?.(false)}
                >
                  {customCloseIcon
                    ? customCloseIcon
                    : closeIcon && <CIcon content={matClose} />}
                </div>
              </>
            )}
          </div>
          <div
            className={clsx(
              'c-dialog--content',
              bodyPadding && 'c-px-md c-pb-md'
            )}
            style={{
              height: bodyHeight,
            }}
          >
            {children}
          </div>
          <div className="c-dialog--footer">
            {getContent(
              customFooter,
              <div className="c-row c-gutter-x-sm">
                {getContent(
                  customFooterActions,
                  <>
                    <div>
                      {showCancelBtn && (
                        <CButton
                          label={cancelBtnLabel}
                          theme="secondary"
                          outlined
                          rounded={rounded}
                        />
                      )}
                    </div>
                    <div>
                      {showConfirmBtn && (
                        <CButton
                          label={confirmBtnLabel}
                          theme="primary"
                          rounded={rounded}
                        />
                      )}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </CSSTransition>
    </CPopup>,
    document.body
  )
}

export default CDialog

export type { CDialogProps }
