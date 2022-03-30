import { CSlot } from 'casual-types'
import { useClickOutside } from 'casual-ui-react'
import clsx from 'clsx'
import React, { useRef } from 'react'
interface CDropdownProps {
  /**
   * 是否展开
   */
  value: boolean
  /**
   * 展开状态发生变化时触发
   */
  onChange?: (newValue: boolean) => void
  /**
   * 默认触发内容
   */
  children: CSlot
  /**
   * 下拉内容
   */
  dropContent: CSlot

  /**
   * 是否禁用
   */
  disabled?: boolean
}
const CDropdown = ({
  value,
  onChange,
  children,
  dropContent,
  disabled = false,
}: CDropdownProps) => {
  const dropdownDom = useRef(null)
  useClickOutside({
    domRef: dropdownDom,
    cbInside: () => {
      if (disabled) return
      onChange?.(true)
    },
    cbOutside: () => {
      if (disabled) return
      onChange?.(false)
    },
  })
  return (
    <div
      ref={dropdownDom}
      className={clsx('c-dropdown', value && 'c-dropdown--dropped')}
    >
      <div className="c-dropdown--trigger">{children}</div>
      <div className="c-dropdown--drop-content">{dropContent}</div>
    </div>
  )
}
export default CDropdown
export type { CDropdownProps }
