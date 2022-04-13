import { useInjectSize, useInjectProp } from 'casual-ui-vue'

type LabelDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export default (props: any) => {
  return {
    size: useInjectSize(props).provideSize,
    labelWidth: useInjectProp({
      propName: 'labelWidth',
      defaultValue: '100px',
      props,
    }),
    col: useInjectProp({
      propName: 'col',
      defaultValue: 3,
      props,
    }),
    labelDirection: useInjectProp<LabelDirection>({
      propName: 'labelDirection',
      defaultValue: 'row',
      props,
    }),
  }
}

export type { LabelDirection }
