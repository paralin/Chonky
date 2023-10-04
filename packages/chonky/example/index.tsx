import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Typography from '@mui/material/Typography';
import { FileBrowser, FileNavbar, FileToolbar, FileList, FileContextMenu } from '../dist/chonky.esm.js';
import { ChonkyIconFA } from '../../chonky-icon-fontawesome';

const App = () => {
  const pathEntries = ['test', 'folder'];
  const [appendInfo, setAppendInfo] = React.useState('Test Info');
  React.useEffect(() => {
    var num = 0;
    setInterval(() => {
      setAppendInfo(`Test Info ${num}`);
      num++;
    }, 1000);
  }, []);

  return (
    <div style={{ height: 400 }}>
      <FileBrowser
        iconComponent={ChonkyIconFA}
        folderChain={pathEntries.map((name, idx) => ({
          id: `${idx}`,
          name,
        }))}
        files={[
          { id: 'zxc', name: 'My File.txt' },
          { id: 'jre', name: 'My Folder' },
        ]}
      >
        <FileNavbar />
        <FileToolbar>
          <div className="chonky-infoContainer">
            <Typography variant="body1" className="chonky-infoText">
              {appendInfo}
            </Typography>
          </div>
        </FileToolbar>
        <FileList />
        <FileContextMenu />
      </FileBrowser>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
