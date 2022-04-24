import React from "react";
import MUIDataTable, { MUIDataTableColumnDef, MUIDataTableOptions } from "mui-datatables";
import { KeyboardBackspaceRounded } from "@material-ui/icons";
import { Button, Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import history from "@src/constants/History";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme =>
  createStyles({
    cardHeaderRoot: {
      paddingBottom: 0
    },
    cardHeaderAction: {
      margin: 0
    },
    cardHeaderContent: {
      display: "none"
    }
  });

interface Props {
  title: string,
  columns: MUIDataTableColumnDef[],
  rows: any,
  options?: MUIDataTableOptions | undefined,
  classes?: any
}

const defaultOptions = {
  rowsPerPageOptions: [10,25,50,100]
};


const DataTable = React.memo<Props>(props => {
  const { columns, rows, title, options, classes } = props;

  const mergeOptions = { ...defaultOptions, ...options }

  return(
    <Card variant="outlined">
      <CardHeader
        title="test"
        action={
          <Button onClick={() => history.goBack()}>
            <KeyboardBackspaceRounded />
            &nbsp;
            <Typography variant="button">
              Back
            </Typography>
          </Button>
        }
        classes={{
          root: classes.cardHeaderRoot,
          action: classes.cardHeaderAction,
          content: classes.cardHeaderContent
        }}
      />
      <CardContent>
        <MUIDataTable
          title={title}
          data={rows}
          columns={columns}
          options={mergeOptions}
        />
      </CardContent>
    </Card>
  );
});

export default withStyles(styles)(DataTable);
