import * as React from 'react';
import { ITestAjaxProps } from './ITestAjaxProps';
export interface ITestAjaxState {
    items: [{
        "Section": "";
        "Assessment": "";
        "Question_Number": "";
        "Title": "";
        "Min_Outcome": "";
    }];
    siteurl: string;
    option: string;
}
export default class TestAjax extends React.Component<ITestAjaxProps, ITestAjaxState, {}> {
    constructor(props: any);
    componentDidMount(): void;
    setQuestionValue: (option: any) => void;
    render(): React.ReactElement<ITestAjaxProps>;
}
//# sourceMappingURL=TestAjax.d.ts.map