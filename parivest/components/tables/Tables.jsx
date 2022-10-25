import styles from '../../styles/Tables.module.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function List() {

 const rows = [
    {
        datejoined: "4 Aug 2022",
        userId: "P000061",
        name: "Ayodeji Ilasu",
        emailaddress:"lummy@mail.com",
       phoneno: "0812347862",
       status: " Approved",
       action: "View",
    },
    {
        datejoined: "4 Aug 2022",
        userId: "P000062",
        name: "Peter Obi",
        emailaddress:"inweke@mail.com",
       phoneno: "0812347851",
       status: " Pending",
       action: "View",
    },
    {
        datejoined: "4 Aug 2022",
        userId: "P000063",
        name: "Tinubu",
        emailaddress:"emilokan@mail.com",
       phoneno: "08123478714",
       status: " In-review",
       action: "View",
    },
    {
        datejoined: "4 Aug 2022",
        userId: "P000064",
        name: "Tolu Jagaban",
        emailaddress:"tolu@mail.com",
       phoneno: "0812347861",
       status: " Pending",
       action: "View",
    },
    {
        datejoined: "4 Aug 2022",
        userId: "P000065",
        name: "Segun Opedun",
        emailaddress:"esgzy@mail.com",
       phoneno: "0812347862",
       status: " Approved",
       action: "View",
    },
    {
        datejoined: "4 Aug 2022",
        userId: "P000066",
        name: "Adebayo Emmanuel",
        emailaddress:"emmy@mail.com",
       phoneno: "0812347362",
       status: "In-review",
       action: "View",
    },
    {
        datejoined: "4 Aug 2022",
        userId: "P000067",
        name: "Emmanualla K Adebayo",
        emailaddress:"kenny@mail.com",
       phoneno: "0812327862",
       status: " Pending",
       action: "View",
    },
    {
        datejoined: "4 Aug 2022",
        userId: "P000068",
        name: "Olanike Oropo",
        emailaddress:"opropo@mail.com",
       phoneno: "0812347862",
       status: " Approved",
       action: "View",
    },
    {
        datejoined: "4 Aug 2022",
        userId: "P000060",
        name: "ibikunle Olanitori",
        emailaddress:"ibikunle@mail.com",
       phoneno: "0812347812",
       status: " In-review",
       action: "View",
    },
    {
        datejoined: "4 Aug 2022",
        userId: "P000071",
        name: "Jimoh Olumide C",
      emailaddress:"olumide@mail.com",
       phoneno: "0813347762",
       status: " Pending",
       action: "View",
    },
 ]
  return (
    <TableContainer component={Paper} className={styles.table}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className={styles.tablecell}>Date joined</TableCell>
        <TableCell className={styles.tablecell}>User ID</TableCell>
        <TableCell className={styles.tablecell}>Name</TableCell>
        <TableCell className={styles.tablecell}>Email address</TableCell>
        <TableCell className={styles.tablecell}>Phone no</TableCell>
        <TableCell className={styles.tablecell}>Status</TableCell>
        <TableCell className={styles.tablecell}>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
            <TableRow key={row.userId}>
            <TableCell className={styles.tablecell}>{row.datejoined}</TableCell>
            <TableCell className={styles.tablecell}>{row.userId}</TableCell>
            <TableCell className={styles.tablecell}>{row.name}</TableCell>
            <TableCell className={styles.tablecell}>{row.emailaddress}</TableCell>
            <TableCell className={styles.tablecell}>{row.phoneno}</TableCell>
            <TableCell className={`styles[state]styles.status`}>{row.status}</TableCell>
            <TableCell className={styles.tablecell}>{row.action}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List