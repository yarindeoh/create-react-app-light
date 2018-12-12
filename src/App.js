import { connect } from 'react-redux';
import AppView from './AppView';
import { setLocale } from 'react-redux-i18n';

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        changeLangLocale: () => dispatch(setLocale('en'))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppView);
