import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

export default function ListTree(props) {
  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
    >
      <TreeItem nodeId="1" label="Maximilian Mustermann">
        <TreeItem nodeId="2" label="Dr. Sebastian Schneider">
          <TreeItem nodeId="8" label="Silke Sauber" />
          <TreeItem nodeId="8" label="Prof. Dr. Martina Krieger" />
        </TreeItem>
        <TreeItem nodeId="8" label="Marc Muster" />
        <TreeItem nodeId="9" label="Schoner Wohnen GmbH & Co KG">
          <TreeItem nodeId="18" label="Dr. Sascha Schmitz" />
          <TreeItem nodeId="29" label="Thomas Tkocz">
            <TreeItem nodeId="38" label="Tanja Klein" />
          </TreeItem>
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
}
