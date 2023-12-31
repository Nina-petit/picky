import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { logout } from 'src/actions/user';
import { reset } from 'src/actions/suggestions';

// plusiuers Reducer => Mettre le nom du reducer correspondant dans le mapStateToProps
const mapStateToProps = (state) => ({
  isConnected: state.status.isConnected,
});

const mapDispatchToProps = (dispatch) => ({
  deconnect: () => {
    window.localStorage.clear();
    const action = logout();
    dispatch(action); 
  },

  resetPickyFind: () => {
    dispatch(reset());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
