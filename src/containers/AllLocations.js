import { connect } from 'react-redux';

import AllLocations from '../components/pages/AllLocations';

const mapStateToProps = (state) => ({
    locations: state.locations
});

export default connect(mapStateToProps)(AllLocations);
