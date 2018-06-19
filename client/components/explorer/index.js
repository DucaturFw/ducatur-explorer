import React,{Fragment} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from 'styled-components';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';
 import PieChart from "react-svg-piechart" ;
import {fetchHolders} from '../../actions/explorer';
import Preloader from '../preloader/index';

 class Explorer extends React.Component {
  
	componentDidMount(){
      this.props.fetchHolders();
	}

	
	render() {
     
       const { fetchHolders,preloader,tokenarray,diagram} = this.props;
		return( <Container>
			<Title>Holders</Title>
             
            {(preloader===true)?this.renderPreloader():this.renderExplorer(tokenarray,diagram)}
     
		</Container>);
    }
    renderExplorer(tokenarray=[],diagram=[]){
        // const data = [
        //     {title: "Data 1", value: 100, color: "#22594e"},
        //     {title: "Data 2", value: 60, color: "#2f7d6d"},
        //     {title: "Data 3", value: 30, color: "#3da18d"},
        //     {title: "Data 4", value: 20, color: "#69c2b0"},
        //     {title: "Data 5", value: 10, color: "#a1d9ce"},
        //   ]
     
        return(
            
            <Fragment>
                <DiagramContainer>
        <PieChart
        data={diagram}
    
        // If you need expand on hover (or touch) effect
        expandOnHover
        // If you need custom behavior when sector is hovered (or touched)
        />
        </DiagramContainer>
        <BootstrapTable data={ tokenarray}>
        <TableHeaderColumn dataField='address' width="200px" isKey>Address</TableHeaderColumn>
        <TableHeaderColumn dataField='token'>Token</TableHeaderColumn>
        <TableHeaderColumn dataField='tokenprocent'>Percent</TableHeaderColumn>
      </BootstrapTable>
      </Fragment>);
    }
    renderPreloader(){
       return    <Preloader />
    }
}
 const mapDispatchtoProps=(dispatch)=>{
return bindActionCreators({fetchHolders},dispatch);
}
const mapStateToProps =(state)=>{
    return {
    tokenarray:state.explorer.tokens,
    preloader:state.explorer.preloader,
    diagram:state.explorer.diagram
    };
}

export default connect(mapStateToProps,mapDispatchtoProps)(Explorer);

let Container = styled.div`
	width: 100%;
    text-align: center;
`

let FormContainer = styled.div`
	margin-left: auto;
	margin-right: auto;
`

let Title = styled.h1`
	margin-top: 20px;
	margin-bottom: 20px;
	text-align: center;
`

const Form = styled.form`
    background: #f7f7f7;
    border: 1px solid #e6e6e6;
    padding: 5px;
	margin-bottom: 20px;
	width: 300px;
	
	display: inline-block;
	margin-left: 20px;
	margin-right: 20px;
`;

const Item = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`;

const Label = styled.label`
`;

const Txt = styled.span`
    display: inline-block;
    // width: 60px;
    text-align: right;
    padding-right: 20px;
`;

const Input = styled.input`
    padding: 4px;
`;

const Btn = styled.button`
    outline: none;
    cursor: pointer;
    border: none;
    border: 1px solid #d6d6d6;
    background: #e7e7e7;
    // color: white;
    border-radius: 0;
    padding: 10px 50px;
`;
const DiagramContainer = styled.div`
width:300px;
height:300px;
`;