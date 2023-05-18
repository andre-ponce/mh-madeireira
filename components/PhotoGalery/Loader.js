import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Loader() {
  return (
    <div
      style={{
        width: '100%',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '40px',
        color: '#ccc',
      }}
    >
      <FontAwesomeIcon icon="fa-spin fa-spinner" />
    </div>
  );
}
