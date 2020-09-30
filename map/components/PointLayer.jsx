import React from 'react';
import provinceCityCountyData from './pca.js'
const options = provinceCityCountyData;

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

    setLayerInfoList = () => {
        let id = 'point_186';
        this.setState({
            pointId: id
        }, () => {
            this.getLayerInfoList();
        });
    }

    getLayerInfoList= () => {
        console.log("getLayerInfoList");
    }

    //格式化省市县的数据
    getProvinceCityList(list){
        list.map((item,index) => {
            item.value = item.label;
            if(item.children){
                return this.getProvinceCityList(item.children);
            }else{
                return item;
            }
        })
        return list;
    }

    render(){
        const {pointId} = this.state;
        return (
            <div>
                {pointId}
            </div>
        )
    }
};

export default PointLayer;