import React, { Component } from 'react'
import { Panel } from 'primereact/components/panel/Panel';
import Modal from 'react-modal';
import CreatePDF from './pdf'
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const customStyles = {
    content: {
        width: '55%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class PhoneDeatails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            viewBill: [],
            modalIsOpen: false,
            showModal: false,
            historyData:[]
        }
        this.handleCheck = this.handleCheck.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.closePreModal = this.closePreModal.bind(this);
        this.handlePdf = this.handlePdf.bind(this);
        this.previousData = this.previousData.bind(this);
    }

    handleCheck = (data) => {
         console.log("data on view click", this.state.viewBill)
        this.setState({
            viewBill: data,
            modalIsOpen: true,
            slectedPdfData: null
        })
    }

    //codefor previous data
    previousData =(previousdata) => {
       console.log("data on Previous bill click", this.state.historyData)
     this.setState({
        historyData:previousdata,
        showModal: true
     })
     console.log(previousdata);
    
    }
    
    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    closePreModal() {
        this.setState({ showModal: false});
    }

    //code to handle pdf 
    handlePdf = (downloadData) => {
        console.log('padf data', downloadData)
        this.setState({
            slectedPdfData: downloadData
        })
    }

    render() {
        const styles = {
            btn1: {
                marginLeft: '10px'
            }
        }
        
        return (
            <div>


                <div className="content-section implementation">

                    <Panel header={this.props.prodata.product_name} toggleable={true}  >
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Phone No: </label> {this.props.prodata.mobile_number}<br />
                                    <label>Custome Name: </label> {this.props.prodata.customer_name}
                                    <br />

                                </div>
                                <div className="col-md-6">
                                    <label>Status: </label> {this.props.prodata.status}<br />
                                    <label>Bill Date: </label> {this.props.prodata.generate_bill_date}

                                </div>
                                <div>

                                </div>

                            </div>
                            <div className="row">
                                <button type="button" style={styles.btn1} className="btn btn-primary" 
                                onClick={() => this.handleCheck(this.props.prodata)}> View Bill</button>
                                <button type="button" style={styles.btn1} className="btn btn-primary"> View Plan</button>
                                <button type="button" style={styles.btn1} className="btn btn-primary"> Support</button>
                            </div>
                        </div>

                    </Panel>

                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >

                        <h2 ref={subtitle => this.subtitle = subtitle}>Bill Details</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <label>Phone No: </label> {this.props.prodata.mobile_number}<br />
                                <label>Custome Name: </label> {this.props.prodata.customer_name}
                                <br />

                            </div>
                            <div className="col-md-6">
                                <label>Status: </label> {this.props.prodata.status}<br />
                                <label>Due Date: </label> {this.props.prodata.due_bill_date}<br />
                                <label>Bill Amount: </label> {this.props.prodata.total_amount}

                            </div>
                            <div>

                            </div>

                        </div>


                        <form>
                            <button className="btn btn-primary" onClick={this.closeModal}>close</button>
                            <button style={styles.btn1} onClick={() => this.handlePdf(this.props.prodata)} className="btn btn-primary" >Download PDF</button>
                            {this.state.slectedPdfData && <CreatePDF pdfdata={this.state.slectedPdfData} />}
                            <button style={styles.btn1} className="btn btn-primary" onClick={()=>this.previousData(this.props.prodata)} > Previous Bill </button>
                        <div>Sample text</div>
                        </form>
       
                 </Modal>

                     {/* Previous bill : start   */}
                    <Modal
                    isOpen={this.state.showModal}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closePreModal}
                    style={customStyles}
                    contentLabel="History Modal"
                    >
                    <h2>Previous Bill Details</h2>
                    <button className="btn btn-primary" onClick={this.closePreModal}>close</button>
                    </Modal>

                </div>
            </div>
        )
    }
}
export default PhoneDeatails;