import React from 'react'
import { Grid , Header } from 'semantic-ui-react'
import { warehouseBrown , warehouseLightBrown } from '../../resources/Colors';

const startStyle={
	minWidth: "100%",
	minHeight: "500px",
	padding: "5px"
}

const gridStyle = {
"backgroundColor" : warehouseLightBrown ,
"textColor" : warehouseBrown,
"position" : "fixed",
"height" : "100%",
"width" : "100%",
"top" : "0px",
"left" : "0px"
}

class Placeholder extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		return(
			<Grid padded columns={10} style={gridStyle}>
				<Grid.Row style={startStyle}>
					<Grid.Column textAlign="center" verticalAlign="middle" width={10}>
						<Header
							style={{"fontSize" : "8rem"}}
							textAlign="center">
							Coming Soon...
						</Header>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default Placeholder;
