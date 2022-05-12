import styledComponents from "styled-components";

const Card = styledComponents.div`
    color: #252525;
    border: 1px solid #252525;
    border-left:0;
    border-right:0;
    padding: 20px 0;
`;
const CardTitle = styledComponents.h2`
    font-size: 20px;
    line-height: 22px;
    font-weight:600;
    color: #252525;
    margin-top:0;
`;
const CardLabel = styledComponents.p`
    font-size: 12px;
    line-height: 15px;
    margin: 0;
    ${props => props.isNoteText ? `
        font-weight: 600;
        color: #252525;
    `: `
        font-weight: 400;
        color: #767676;
    `}
`;
const CardLabelGroup = styledComponents.div`
    border-left: 1px solid #767676;
    padding: 0 10px;
`;
const CardLabelIcon = styledComponents.i`
    color:yellow;
    font-size:14px;
    margin-right:5px;
`;
const CardActionIcon = styledComponents.i`
    font-size:18px;
`;
const CardActionButton = styledComponents.button`
    width:auto;
    font-size:12px;
    padding: 8px 10px;
    margin: 0 5px;
    border:0;
    background-color:#4D6474;
    border-radius:0;
    color: #ffffff;
    cursor:pointer;
    &:hover {
        background-color: #3E505C;
    }
    &:active {
        background-color: #31404A;
    }
`;

const FullDetailActionButton = styledComponents.span`
    color:#252525;
    font-size:14px;
    text-decoration: underline;
    cursor:pointer;
    display:inline;
    font-weight: bold;
    margin-top:35px;
`;
const CardComponent = () => {
    return (
        <Card className="col">
            <div className="row">
                <div className="col-sm-7">
                    <CardTitle>This is long card text with reflow text</CardTitle>
                    <div className="row">
                        <CardLabelGroup className="col">
                            <CardLabel>Request reference</CardLabel>
                            <CardLabel isNoteText>SET29383ABCH</CardLabel>
                        </CardLabelGroup>
                        <CardLabelGroup className="col">
                            <CardLabel>Category</CardLabel>
                            <CardLabel isNoteText>Payment</CardLabel>
                        </CardLabelGroup>
                        <CardLabelGroup className="col">
                            <CardLabel>Request status</CardLabel>
                            <CardLabel isNoteText>
                                <CardLabelIcon className="bi bi-exclamation-circle-fill"/>
                                Pending authorisation
                            </CardLabel>
                        </CardLabelGroup>
                    </div>

                </div>
                <div className="col-sm-5">
                    <div className="row justify-content-end">
                        <span className="col-2"><CardActionIcon className="bi bi-filetype-pdf"/></span>|
                        <span className="col-2"><CardActionIcon className="bi bi-file-earmark-word-fill"/></span>
                        <CardActionButton>Reject</CardActionButton>
                        <CardActionButton>Authorize</CardActionButton>
                    </div>
                    <div className="row justify-content-end">
                        <FullDetailActionButton className="col-auto">
                            Full Details
                            <CardLabelIcon className="bi bi-arrow-down" style={{color:'black'}}/>
                            </FullDetailActionButton>
                    </div>
                </div>
            </div>
        </Card>
    );
}
export default CardComponent;