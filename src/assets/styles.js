import { StyleSheet } from 'react-native';
import { THEME_COLOR, BG_COLOR } from '@assets/colors';

const DISABLED_BTN_COLOR = '#E4E4E5';

var styles = StyleSheet.create({

    /*=================================================
                Headerbar Title Styles
    ==================================================*/
    brandImage: {
        width: 135,
        height: 20,
    },

    /*=================================================
                Layout Styles
    ==================================================*/
    contentPadding: {
        paddingHorizontal: 16,
        flex: 1,
    },
    section: {
        paddingVertical: 36,
    },
    divider: {
        marginLeft: -16,
        marginRight: -16,
        height: 1,
        backgroundColor: '#979797',
        opacity: .36,
    },

    /*=================================================
                Typography Styles
    ==================================================*/
    headerText: {
        fontSize: 20,
        fontWeight: '600',
        letterSpacing: -0.41
    },
    pillText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000',
    },
    pillTextActive: {
        color: '#fff'
    },
    buttonBlockText: {
        fontSize: 17,
        fontWeight: '600',
        letterSpacing: -0.38,
        color: '#fff',
    },
    buttonBlockTextDisabled: {
        color: '#000',
        opacity: 0.38,
    },

    /*=================================================
                Button/Pill Styles
    ==================================================*/
    pillContainer: {
        marginTop: 18,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: -4,
    },
    pill: {
        backgroundColor: DISABLED_BTN_COLOR,
        paddingHorizontal: 13,
        paddingVertical: 11,
        borderRadius: 50,
        marginVertical: 5,
        marginHorizontal: 4,
        alignSelf: 'flex-start',
    },
    pillActive: {
        backgroundColor: THEME_COLOR,
    },
    buttonBlock: {
        backgroundColor: THEME_COLOR,
        paddingVertical: 14,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 8,
    },
    buttonBlockDisabled: {
        backgroundColor: DISABLED_BTN_COLOR,
    },
})

export default styles;