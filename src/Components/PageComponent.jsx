import Pagination from 'react-bootstrap/Pagination';
import Container from 'react-bootstrap/Container';

function PageComponent({activePage,totalPages}){


  return <Container>
    <Pagination linkClassName="">
    
    <Pagination.Prev />
    <Pagination.Item>{1}</Pagination.Item>
    

    <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Item active>{4}</Pagination.Item>
    <Pagination.Item>{5}</Pagination.Item>
    <Pagination.Item disabled>{6}</Pagination.Item>

    <Pagination.Ellipsis />
    <Pagination.Item>{10}</Pagination.Item>
    <Pagination.Next />
   
  </Pagination>

  </Container>
}

/*

 Items needed for the Pagianation.

 {

 currentPage=int.
 listOfPages:[],
 elipsisBreakPoint=true
 elipsisSucceedingNo=10;
 OnClickPrev=
 onClickFirst=
 onClickNext=
 onClickLast=

 }



*/

export default PageComponent;