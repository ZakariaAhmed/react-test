import React from 'react'
import MaterialTable from 'material-table'
import LoadingCircle from './LoadingCircle';

/* Didnt finish editing books form */

const BooksTable = ({books, isFetching, fetched}) => {
    const columns = [
        {title: 'Id', field: 'id'},
        {title: 'Title', field: 'title'},
        {title: 'Bookshelves', field: 'bookshelves'},
        {title: 'Download_count', field: 'download_count'}
    ]
    if (fetched) {
       return ( <MaterialTable columns={columns}  data={books} title={'books'} editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              {
                /* const data = this.state.data;
            data.push(newData);
            this.setState({ data }, () => resolve()); */
              }
              resolve()
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              {
                /* const data = this.state.data;
        const index = data.indexOf(oldData);
        data[index] = newData;                
        this.setState({ data }, () => resolve()); */
              }
              resolve()
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              {
                /* let data = this.state.data;
        const index = data.indexOf(oldData);
        data.splice(index, 1);
        this.setState({ data }, () => resolve()); */
              }
              resolve()
            }, 1000)
          }),
      }} />)
    } else {
        return (<LoadingCircle />)
    }
}

export default BooksTable;