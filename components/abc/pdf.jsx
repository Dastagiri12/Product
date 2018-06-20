import React, { Component } from 'react';
import PDF from 'jspdf';

export default class CreatePDF extends Component {
    
  render() {
      const test= this.props.pdfdata.id;
      const user_name= this.props.pdfdata.customer_name;
      const dueDate= this.props.pdfdata.due_bill_date;
      const total_amount= this.props.pdfdata.total_amount;
      console.log("value",test);
      const doc1 = new PDF('p','pt','c6');
      doc1.text(20,80,'number'+ test +'\nCustomer Name:'+user_name+'\nDue date:'+dueDate+'\nTotal Amount:'+ total_amount);
     
      doc1.save("finalBill.pdf");
    return (
      <div>
        <h1>PDF</h1>
      </div>
    )
  }
}