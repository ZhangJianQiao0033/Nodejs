try {
  const fs = require('fs');

  fs.readdir('./why', (err, files) => {
    if (err) {
      console.log('Error:', err);
    } else {
      console.log('Files:', files);
    }
  });
} catch (error) {
  console.log('Caught an error:', error);
}
