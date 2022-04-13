---
title: 表单&表单项
componentPath: form/CForm
---

### 基础使用

```vue live
<script setup>
import { ref } from 'vue'
const formData = ref({
  name: 'Micheal Jackson',
  gender: 'male',
  birthday: new Date('August 29, 1958'),
  industry: 'Entertainment'
})

const formItems = [
  { field: 'name', label: '姓名' },
  {
    label: '性别',
    field: 'gender',
    component: 'radio',
    options: [
      { label: 'Female', value: 'female' },
      { label: 'Male', value: 'male' },
    ]
  },
  {
    label: '生日',
    field: 'birthday',
    component: 'date-picker',
    componentProps: {
      format: 'MMM DD, YYYY'
    }
  },
  {
    label: '行业',
    field: 'industry',
    component: 'select',
    componentProps: {
      options: [
        { label: 'IT', value: 'IT' },
        { label: 'Medical', value: 'Medical' },
        { label: 'Entertainment', value: 'Entertainment' },
        { label: 'Transportation', value: 'Transportation' }
      ]
    }
  }
]
</script>
<template>
  <c-form v-model="formData" :items="formItems" />
</template>
```