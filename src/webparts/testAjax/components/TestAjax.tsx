import * as React from 'react';
import styles from './TestAjax.module.scss';
import { ITestAjaxProps } from './ITestAjaxProps';
import {IColumn, DetailsList, SelectionMode, DetailsListLayoutMode, mergeStyles, Link,Image,ImageFit, Checkbox, Label, PrimaryButton, ChoiceGroup, IChoiceGroupOption} from '@fluentui/react';
import { escape } from '@microsoft/sp-lodash-subset';
import * as strings from 'TestAjaxWebPartStrings';
import * as $ from 'jquery';
require('bootstrap');
require('../../../../node_modules/bootstrap/dist/css/bootstrap.css');
var questionValue = 0;

export interface ITestAjaxState {
  items: [
    {
      "Section": "",
      "Assessment": "",
      "Question_Number": "",
      "Title": "",
      "Min_Outcome": ""      
    }
  ];
  siteurl: string;
  option: string;
}

export default class TestAjax extends React.Component<ITestAjaxProps, ITestAjaxState,{}> {

  constructor(props) { 
    super(props); 
    this.state = { 
      items: [ 
        { 
          "Section": "",
          "Assessment": "",
          "Question_Number": "",
          "Title": "",
          "Min_Outcome": "" 
        } 
      ],
      siteurl: "",
      option: ""
    }; 
  }

  public componentDidMount(){ 
    var reactHandler = this; 
    $.ajax({ 
        url: `${this.props.siteurl}/_api/web/lists/GetByTitle('Audit%20Tool%20Questions')/Items?$filter=Section eq 'Consultation Records'`, 
        type: "GET", 
        headers:{'Accept': 'application/json; odata=verbose;'}, 
        success: function(resultData) { 
          reactHandler.setState({ 
            items: resultData.d.results 
          }); 
        }, 
        error : function(jqXHR, textStatus, errorThrown) { 
        } 
    }); 
  } 

  public render(): React.ReactElement<ITestAjaxProps> {
    return (
      <div className={ styles.testAjax }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <div className={styles.subTitle}>Demo : Retrieve SharePoint List Items using SPFx , REST API  & React JS</div>
              <br/>
              <div className={styles.subTitle} >Audit Questions</div> 
              <div className="row"> 
                <div className={styles.subTitle}>Q Num</div> 
                <div className={styles.subTitle}>Question Text</div> 
                <div className={styles.subTitle}>Min Outcome</div> 
              </div>               
              {this.state.items.map(function(item,key){ 
                return (
                  <div className="row" key={key}> 
                    <div className="col-1">{item.Question_Number}</div> 
                    <div className="col-6">{item.Title}</div>
                    <div className="col-3 text-center">
                      <div className="form-check-inline">
                        <div>
                          <input type="radio" value="Yes" name="ccrqa" /> Yes
                          <input type="radio" value="No" name="ccrqa" /> No
                          <input type="radio" value="NA" name="ccrqa" /> N/A
                        </div>
                      </div> 
                    </div> 
                    <div className="col-2">{item.Min_Outcome}</div>
                  </div>); 
                })}                     
            </div>
          </div>
        </div>
      </div>
    );
  }
}
