/*
 * @Author: ROYIANS
 * @Date: 2022/10/18 9:12
 * @Description: css in js
 * @sign: 迷路，并无小路大路短路长路之区别。不能说在大路长路上迷路就不是迷路了。走在达不到目的的路上，就是迷路。
 * ╦═╗╔═╗╦ ╦╦╔═╗╔╗╔╔═╗
 * ╠╦╝║ ║╚╦╝║╠═╣║║║╚═╗
 * ╩╚═╚═╝ ╩ ╩╩ ╩╝╚╝╚═╝
 */
import styled from 'vue-styled-components'

const commonProps = {
  color: {
    type: String,
    default: '#212121'
  },
  background: {
    type: String,
    default: '#FFFFFF'
  },
  border: {
    type: String,
    default: 'none'
  },
  borderRadius: {
    type: String,
    default: 'inherit'
  },
  padding: {
    type: String,
    default: '0 0 0 0'
  },
  margin: {
    type: String,
    default: '0 0 0 0'
  },
  fontSize: {
    type: Number,
    default: 12
  },
  zIndex: {
    type: Number,
    default: 1
  },
  fontFamily: {
    type: String,
    default: 'default'
  },
  lineHeight: {
    type: String,
    default: '1'
  },
  letterSpacing: {
    type: String,
    default: '0'
  },
  justifyContent: {
    type: String,
    default: 'flex-start'
  },
  alignItems: {
    type: String,
    default: 'flex-start'
  },
  borderWidth: {
    type: Number,
    default: 0
  },
  borderColor: {
    type: String,
    default: '#212121'
  },
  borderType: {
    type: String,
    default: 'solid'
  }
}

const textProps = Object.assign(commonProps, {})

export const StyledText = styled('div', textProps)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  font-size: ${(props) => `${props.fontSize}pt`};
  font-family: ${(props) =>
    props.fontFamily === 'default'
      ? 'LXGW New Clear Gothic Book, Helvetica Neue, Helvetica, Arial, PingFang SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif'
      : `${props.fontFamily}`};
  z-index: ${(props) => props.zIndex};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => `${props.letterSpacing}px`};
  border: ${(props) =>
    `${props.borderWidth}px ${props.borderType} ${props.borderColor}`};
`

export const StyledSimpleText = styled('div', textProps)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  font-size: ${(props) => `${props.fontSize}pt`};
  font-family: ${(props) =>
    props.fontFamily === 'default'
      ? 'LXGW New Clear Gothic Book, Helvetica Neue, Helvetica, Arial, PingFang SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif'
      : `${props.fontFamily}`};
  z-index: ${(props) => props.zIndex};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => `${props.letterSpacing}px`};
  border: ${(props) =>
    `${props.borderWidth}px ${props.borderType} ${props.borderColor}`};
`
