import React from 'react';

class PointLayer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pointId: ''
        }
    }
    componentDidMount(){
        this.getLayerInfoList();
    }
    setLayerInfoList(){
        let id = 'point_186';
        this.setState({
            pointId: id
        }, () => {
            this.getLayerInfoList();
        });
    }
    getLayerInfoList(){
        const {pointId} = this.state;
        console.log(pointId);
    }
    render(){
        return (
            <div>
                {pointId}
            </div>
        )
    }
};

export default PointLayer;