import React from 'react'
import {
    TouchableOpacity,
    Text,
} from 'react-native'
import PropTypes from 'prop-types'

export default function Controls ({ styles, textStyles, label, onPressControl, component }) {
    return (
        <TouchableOpacity
            onPress={() => onPressControl()}
            hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}
        >
            { component ? component : <Text style={[ styles, textStyles ]}>
                { label }
            </Text>}
        </TouchableOpacity>
    )
}

Controls.propTypes = {
    styles: PropTypes.shape({}).isRequired,
    label: PropTypes.string.isRequired,
    onPressControl: PropTypes.func.isRequired,
}
