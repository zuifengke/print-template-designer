export const paletteConfigList = {
  RoyText: [
    {
      title: '宽度',
      field: 'width',
      span: 24,
      itemRender: {
        name: '$input',
        props: {
          type: 'number',
          size: 'mini'
        }
      }
    },
    {
      title: '高度',
      field: 'height',
      span: 24,
      itemRender: {
        name: '$input',
        props: {
          type: 'number',
          size: 'mini'
        }
      }
    },
    {
      title: '背景颜色',
      field: 'background',
      span: 24,
      itemRender: {
        name: '$colorPicker',
        props: {}
      }
    },
    {
      title: '边框类型',
      field: 'borderType',
      span: 24,
      itemRender: {
        name: '$select',
        options: [
          {
            label: '无',
            value: 'none'
          },
          {
            label: '实线',
            value: 'solid'
          },
          {
            label: '线虚线',
            value: 'dashed'
          },
          {
            label: '点虚线',
            value: 'dotted'
          }
        ]
      }
    },
    {
      title: '边框颜色',
      field: 'borderColor',
      span: 24,
      itemRender: {
        name: '$colorPicker',
        props: {}
      }
    },
    {
      title: '边框宽度',
      field: 'borderWidth',
      span: 24,
      itemRender: {
        name: '$input',
        props: {
          type: 'number',
          size: 'mini',
          min: 0,
          max: 4
        }
      }
    },
    {
      title: '旋转角度（°）',
      field: 'rotate',
      span: 24,
      itemRender: {
        name: '$input',
        props: {
          type: 'number',
          size: 'mini',
          min: 0,
          max: 360
        }
      }
    }
  ],
  RoySimpleText: [
    {
      title: '宽度',
      field: 'width',
      span: 24,
      itemRender: {
        name: '$input',
        props: {
          type: 'number',
          size: 'mini'
        }
      }
    },
    {
      title: '高度',
      field: 'height',
      span: 24,
      itemRender: {
        name: '$input',
        props: {
          type: 'number',
          size: 'mini'
        }
      }
    },
    {
      title: '字体',
      field: 'fontFamily',
      span: 24,
      itemRender: {
        name: '$select',
        options: [
          {
            label: '默认',
            value: 'default'
          },
          {
            label: '宋体',
            value: 'simsun'
          },
          {
            label: '黑体',
            value: 'simhei'
          },
          {
            label: '楷体',
            value: 'kaiti'
          },
          {
            label: '仿宋',
            value: 'fangsong'
          },
          {
            label: '微软雅黑',
            value: 'microsoft yahei'
          }
        ]
      }
    },
    {
      title: '字体颜色',
      field: 'color',
      span: 24,
      itemRender: {
        name: '$colorPicker',
        props: {}
      }
    },
    {
      title: '字体大小（pt）',
      field: 'fontSize',
      span: 24,
      itemRender: {
        name: '$input',
        props: {
          type: 'number',
          size: 'mini',
          min: 10,
          max: 120
        }
      }
    },
    {
      title: '排列',
      span: 24,
      itemRender: {
        name: '$btnRadioGroup',
        options: [
          {
            field: 'justifyContent',
            options: [
              {
                type: 'icon',
                content: 'ri-align-left',
                value: 'flex-start',
                label: '水平居左'
              },
              {
                type: 'icon',
                content: 'ri-align-center',
                value: 'center',
                label: '水平居中'
              },
              {
                type: 'icon',
                content: 'ri-align-right',
                value: 'flex-end',
                label: '水平居下'
              }
            ]
          },
          {
            field: 'alignItems',
            options: [
              {
                type: 'icon',
                content: 'ri-align-left rotate-90',
                value: 'flex-start',
                label: '垂直居左'
              },
              {
                type: 'icon',
                content: 'ri-align-center rotate-90',
                value: 'center',
                label: '垂直居中'
              },
              {
                type: 'icon',
                content: 'ri-align-right rotate-90',
                value: 'flex-end',
                label: '垂直居下'
              }
            ]
          }
        ]
      }
    },
    {
      title: '文字样式',
      span: 24,
      itemRender: {
        name: '$btnRadioGroup',
        options: [
          {
            field: 'fontWeight',
            isRadio: false,
            options: [
              {
                type: 'icon',
                content: 'ri-bold',
                value: 'bold',
                label: '粗体'
              }
            ]
          },
          {
            field: 'fontStyle',
            isRadio: false,
            options: [
              {
                type: 'icon',
                content: 'ri-italic',
                value: 'italic',
                label: '斜体'
              }
            ]
          },
          {
            field: 'isUnderLine',
            isRadio: false,
            options: [
              {
                type: 'icon',
                content: 'ri-underline',
                value: true,
                label: '下划线'
              }
            ]
          },
          {
            field: 'isDelLine',
            isRadio: false,
            options: [
              {
                type: 'icon',
                content: 'ri-strikethrough',
                value: true,
                label: '删除线'
              }
            ]
          }
        ]
      }
    },
    {
      title: '背景颜色',
      field: 'background',
      span: 24,
      itemRender: {
        name: '$colorPicker',
        props: {}
      }
    },
    {
      title: '边框类型',
      field: 'borderType',
      span: 24,
      itemRender: {
        name: '$select',
        options: [
          {
            label: '无',
            value: 'none'
          },
          {
            label: '实线',
            value: 'solid'
          },
          {
            label: '线虚线',
            value: 'dashed'
          },
          {
            label: '点虚线',
            value: 'dotted'
          }
        ]
      }
    },
    {
      title: '边框颜色',
      field: 'borderColor',
      span: 24,
      itemRender: {
        name: '$colorPicker',
        props: {}
      }
    },
    {
      title: '边框宽度',
      field: 'borderWidth',
      span: 24,
      itemRender: {
        name: '$input',
        props: {
          type: 'number',
          size: 'mini',
          min: 0,
          max: 4
        }
      }
    },
    {
      title: '旋转角度（°）',
      field: 'rotate',
      span: 24,
      itemRender: {
        name: '$input',
        props: {
          type: 'number',
          size: 'mini',
          min: 0,
          max: 360
        }
      }
    }
  ],
  RoyRect: [
    {
      title: '宽度',
      field: 'width',
      span: 24,
      itemRender: {
        name: '$input',
        props: {
          type: 'number',
          size: 'mini'
        }
      }
    },
    {
      title: '高度',
      field: 'height',
      span: 24,
      itemRender: {
        name: '$input',
        props: {
          type: 'number',
          size: 'mini'
        }
      }
    },
    {
      title: '背景颜色',
      field: 'background',
      span: 24,
      itemRender: {
        name: '$colorPicker',
        props: {}
      }
    },
    {
      title: '边框类型',
      field: 'borderType',
      span: 24,
      itemRender: {
        name: '$select',
        options: [
          {
            label: '无',
            value: 'none'
          },
          {
            label: '实线',
            value: 'solid'
          },
          {
            label: '线虚线',
            value: 'dashed'
          },
          {
            label: '点虚线',
            value: 'dotted'
          }
        ]
      }
    },
    {
      title: '边框颜色',
      field: 'borderColor',
      span: 24,
      itemRender: {
        name: '$colorPicker',
        props: {}
      }
    },
    {
      title: '边框宽度',
      field: 'borderWidth',
      span: 24,
      itemRender: {
        name: '$input',
        props: {
          type: 'number',
          size: 'mini',
          min: 0,
          max: 4
        }
      }
    },
    {
      title: '旋转角度（°）',
      field: 'rotate',
      span: 24,
      itemRender: {
        name: '$input',
        props: {
          type: 'number',
          size: 'mini',
          min: 0,
          max: 360
        }
      }
    }
  ],
  RoyCircle: [
    {
      title: '宽度',
      field: 'width',
      span: 24,
      itemRender: {
        name: '$input',
        props: {
          type: 'number',
          size: 'mini'
        }
      }
    },
    {
      title: '高度',
      field: 'height',
      span: 24,
      itemRender: {
        name: '$input',
        props: {
          type: 'number',
          size: 'mini'
        }
      }
    },
    {
      title: '背景颜色',
      field: 'background',
      span: 24,
      itemRender: {
        name: '$colorPicker',
        props: {}
      }
    },
    {
      title: '边框类型',
      field: 'borderType',
      span: 24,
      itemRender: {
        name: '$select',
        options: [
          {
            label: '无',
            value: 'none'
          },
          {
            label: '实线',
            value: 'solid'
          },
          {
            label: '线虚线',
            value: 'dashed'
          },
          {
            label: '点虚线',
            value: 'dotted'
          }
        ]
      }
    },
    {
      title: '边框颜色',
      field: 'borderColor',
      span: 24,
      itemRender: {
        name: '$colorPicker',
        props: {}
      }
    },
    {
      title: '边框宽度',
      field: 'borderWidth',
      span: 24,
      itemRender: {
        name: '$input',
        props: {
          type: 'number',
          size: 'mini',
          min: 0,
          max: 4
        }
      }
    },
    {
      title: '旋转角度（°）',
      field: 'rotate',
      span: 24,
      itemRender: {
        name: '$input',
        props: {
          type: 'number',
          size: 'mini',
          min: 0,
          max: 360
        }
      }
    }
  ],
  RoyLine: [
    {
      title: '宽度',
      field: 'width',
      span: 24,
      itemRender: {
        name: '$input',
        props: {
          type: 'number',
          size: 'mini'
        }
      }
    },
    {
      title: '粗细',
      field: 'height',
      span: 24,
      itemRender: {
        name: '$select',
        options: [
          {
            label: '极细',
            value: 0.5
          },
          {
            label: '细',
            value: 1
          },
          {
            label: '正常',
            value: 1.5
          },
          {
            label: '粗',
            value: 2
          },
          {
            label: '极粗',
            value: 4
          },
          {
            label: '粗粗粗',
            value: 6
          }
        ]
      }
    },
    {
      title: '颜色',
      field: 'background',
      span: 24,
      itemRender: {
        name: '$colorPicker',
        props: {}
      }
    },
    {
      title: '旋转角度（°）',
      field: 'rotate',
      span: 24,
      itemRender: {
        name: '$input',
        props: {
          type: 'number',
          size: 'mini',
          min: 0,
          max: 360
        }
      }
    }
  ],
  RoyStar: [
    {
      title: '大小',
      field: 'height',
      span: 24,
      itemRender: {
        name: '$input',
        props: {
          type: 'number',
          size: 'mini',
          min: 0
        }
      }
    },
    {
      title: '颜色',
      field: 'background',
      span: 24,
      itemRender: {
        name: '$colorPicker',
        props: {}
      }
    },
    {
      title: '样式',
      field: 'icon',
      span: 24,
      itemRender: {
        name: '$select',
        options: [
          {
            label: '实心五角星',
            value: 'icon-shiwujiaoxing'
          },
          {
            label: '空心五角星',
            value: 'icon-kongwujiaoxing'
          },
          {
            label: '圆润五角星',
            value: 'icon-shoucang'
          },
          {
            label: '双线五角星',
            value: 'icon-wujiaoxing'
          }
        ]
      }
    },
    {
      title: '旋转角度（°）',
      field: 'rotate',
      span: 24,
      itemRender: {
        name: '$input',
        props: {
          type: 'number',
          size: 'mini',
          min: 0,
          max: 360
        }
      }
    }
  ]
}
