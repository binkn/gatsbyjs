import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// components
import Input from '../../common/Input'
import Button from '../../common/Button'
import Icons from '../../../themes/Icons'
import Container from '../../common/Container'
import Description from '../../common/Description'

// theme modules
import { Colors } from '../../../themes/Colors'
import { WEIGHT } from '../../../themes/Typography'

const CustomDescription = styled(Description)`
  font-size: 26px;
  font-weight: ${WEIGHT.small};
  display: inline-block;
  padding-top: 18px;
`

class Email extends Component {
  constructor(props) {
    super(props)

    this.email = {}
  }

  handleOnChange = (event) => {
    this.email[event.target.name] = event.target.value.trim()
  }

  render() {
    const { className, customStyle } = this.props

    return (
      <div
        className={className}
        style={customStyle}
      >
        <Container
          customStyle={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <CustomDescription
              text='Be in the know with the latest and greatest from'
              color={Colors.white}
            />
            <CustomDescription
              text='Phainc'
              color={Colors.carnation}
              customStyle={{
                paddingLeft: '5px'
              }}
            />
          </div>
          <div>
            <Input
              id='email'
              defaultValue=''
              placeHolder='Your email address'
              name='email'
              value=''
              inputRef={(value) => {this.textValue = value}}
              handleOnChange={this.handleOnChange}
              customStyle={{
                margin: '10px'
              }}
            />

            <Button
              src={Icons.sendIcon}
              alt='send icon'
              onPress={() => console.log(this.email)}
              customStyle={{
                buttonStyle: {
                  paddingTop: '4px',
                  paddingBottom: '11px',
                  height: '59px',
                  borderRadius: '0 30px 30px 0',
                  backgroundColor: `${Colors.carnation}`,
                  borderColor: `${Colors.carnation}`,
                  marginLeft: '-103px'
                }
              }}
            />
          </div>
        </Container>
      </div>
    )
  }
}

export default styled(React.memo(Email))`
  background-color: ${Colors.codGay};
  padding: 56px 0 30px;
  border-bottom: 1px solid ${Colors.fifth};
`

// Defined Props Types
Email.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object
}

// Defined default Props
Email.defaultProps = {
  className: '',
  customStyle: {}
}
