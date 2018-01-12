import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import PropTypes from 'prop-types'
import { Utils } from './Utils'

export default function Weekdays (props) {
    const { styles, startFromMonday, weekdays, textStyle, dayLabelsWrapperStyle } = props
    let wd = weekdays
    if (!wd) {
        wd = startFromMonday ? Utils.WEEKDAYS_MON : Utils.WEEKDAYS // English Week days Array
    }

    return (
        <View style={[ styles.dayLabelsWrapper, dayLabelsWrapperStyle ]}>
            { wd.map((day, key) => {
                return (
                    <Text key={key}
                          style={[ styles.dayLabels, textStyle, key > 4 ? { color: 'rgba(82, 82, 82, 0.3)' } : {} ]}>
                        {day}
                    </Text>
                )
            })
            }
        </View>
    )
}

Weekdays.propTypes = {}
