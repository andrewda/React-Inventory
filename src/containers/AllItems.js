import { connect } from 'react-redux';

import AllItems from '../components/pages/AllItems';

const mapStateToProps = (state) => ({
    items: state.items
});

export default connect(mapStateToProps)(AllItems);
