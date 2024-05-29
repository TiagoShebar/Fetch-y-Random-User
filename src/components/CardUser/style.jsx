export const styles = {
    cardContainer: {
      width: '200px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s',
      marginBottom: '20px',
      cursor: 'pointer',
    },
    cardContainerHover: {
      transform: 'scale(1.05)',
    },
    cardImage: {
      width: '100%',
      height: 'auto',
    },
    cardInfo: {
      padding: '16px',
    },
    cardName: {
      fontSize: '18px',
      margin: '8px 0',
    },
    cardLocation: {
      color: '#555',
    },
    flagIcon: {
      display: 'inline-block',
      width: '16px',
      height: '16px',
      backgroundSize: 'cover',
      marginRight: '4px',
      backgroundImage: 'url(path/to/flag-icon.png)', // Adjust the path to your flag icon
    }
  };
  