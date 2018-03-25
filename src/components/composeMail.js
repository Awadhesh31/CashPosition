import React from 'react';
import SideNave from './sidenave';

const Compose = () => (
    <div>
    <div className="row-fluid">
      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <SideNave />
      </div>
      <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
        <div className="panel panel-default">
            <div className="panel-body inbox-menu">
                <div className="dev-email-message-title"><i className="fa fa-pencil-square-o"></i>&nbsp;&nbsp;New Message</div>
                <hr />
            </div>
            <div className="panel-body">
                <div className="form-group">
                    <label className="col-lg-2 col-md-2 col-sm-3 col-xs-4 com-lab">TO&nbsp;&nbsp;:</label>
                    <div className="col-lg-10 col-md-10 col-sm-9 col-xs-8">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-lg-2 col-md-2 col-sm-3 col-xs-4 com-lab">CC&nbsp;&nbsp;:</label>
                    <div className="col-lg-10 col-md-10 col-sm-9 col-xs-8">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-lg-2 col-md-2 col-sm-3 col-xs-4 com-lab">Subject&nbsp;&nbsp;:</label>
                    <div className="col-lg-10 col-md-10 col-sm-9 col-xs-8">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="note-editor">
                        <div className="note-toolbar btn-toolbar">
                            <div className="note-style btn-group">
                            <button type="button" className="btn btn-default btn-sm btn-small dropdown-toggle" data-toggle="dropdown" title="" data-name="style" data-original-title="Style" aria-expanded="false">
                            <i className="fa fa-magic"></i> <span className="caret"></span>
                            </button><ul className="dropdown-menu" data-name="style"><li><a data-event="formatBlock"  data-value="p">Normal</a></li><li><a data-event="formatBlock"  data-value="blockquote"><blockquote>Quote</blockquote></a></li><li><a data-event="formatBlock"  data-value="pre">Code</a></li><li><a data-event="formatBlock"  data-value="h1"><h1>Header 1</h1></a></li><li><a data-event="formatBlock"  data-value="h2"><h2>Header 2</h2></a></li><li><a data-event="formatBlock"  data-value="h3"><h3>Header 3</h3></a></li><li><a data-event="formatBlock"  data-value="h4"><h4>Header 4</h4></a></li><li><a data-event="formatBlock"  data-value="h5"><h5>Header 5</h5></a></li><li><a data-event="formatBlock"  data-value="h6"><h6>Header 6</h6></a></li></ul></div>
                            <div className="note-font btn-group"><button type="button" className="btn btn-default btn-sm btn-small active" title="" data-event="bold" data-name="bold" data-original-title="Bold (CTRL+B)"><i className="fa fa-bold"></i></button><button type="button" className="btn btn-default btn-sm btn-small" title="" data-event="italic" data-name="italic" data-original-title="Italic (CTRL+I)"><i className="fa fa-italic"></i></button><button type="button" className="btn btn-default btn-sm btn-small" title="" data-event="underline" data-name="underline" data-original-title="Underline (CTRL+U)"><i className="fa fa-underline"></i></button><button type="button" className="btn btn-default btn-sm btn-small" title="" data-event="removeFormat" data-name="clear" data-original-title="Remove Font Style (CTRL+\)"><i className="fa fa-eraser"></i></button></div>
                            <div className="note-insert btn-group"><button type="button" className="btn btn-default btn-sm btn-small" title="" data-event="showLinkDialog" data-hide="true" data-name="link" data-original-title="Link (CTRL+K)"><i className="fa fa-link"></i></button><button type="button" className="btn btn-default btn-sm btn-small" title="" data-event="showImageDialog" data-hide="true"  data-name="picture" data-original-title="Picture"><i className="fa fa-picture-o"></i></button><button type="button" className="btn btn-default btn-sm btn-small" title="" data-event="insertHorizontalRule" data-name="hr" data-original-title="Insert Horizontal Rule (CTRL+ENTER)"><i className="fa fa-minus"></i></button></div>
                            <div className="note-view btn-group"><button type="button" className="btn btn-default btn-sm btn-small" title="" data-event="fullscreen" data-name="fullscreen" data-original-title="Full Screen"><i className="fa fa-arrows-alt"></i></button><button type="button" className="btn btn-default btn-sm btn-small" title="" data-event="codeview"  data-name="codeview" data-original-title="Code View"><i className="fa fa-code"></i></button></div>
                            <div className="note-help btn-group"><button type="button" className="btn btn-default btn-sm btn-small" title="" data-event="showHelpDialog" data-hide="true"  data-name="help" data-original-title="Help"><i className="fa fa-question"></i></button></div>
                            <div className="note-para btn-group"><button type="button" className="btn btn-default btn-sm btn-small" title="" data-event="insertUnorderedList"  data-name="ul" data-original-title="Unordered list (CTRL+SHIFT+NUM7)"><i className="fa fa-list-ul"></i></button><button type="button" className="btn btn-default btn-sm btn-small" title="" data-event="insertOrderedList"  data-name="ol" data-original-title="Ordered list (CTRL+SHIFT+NUM8)"><i className="fa fa-list-ol"></i></button><div className="dropdown-menu" data-name="paragraph"><div className="note-align btn-group"><button type="button" className="btn btn-default btn-sm btn-small active" title="" data-event="justifyLeft"  data-original-title="Align left (CTRL+SHIFT+L)"><i className="fa fa-align-left"></i></button><button type="button" className="btn btn-default btn-sm btn-small" title="" data-event="justifyCenter"  data-original-title="Align center (CTRL+SHIFT+E)"><i className="fa fa-align-center"></i></button><button type="button" className="btn btn-default btn-sm btn-small" title="" data-event="justifyRight"  data-original-title="Align right (CTRL+SHIFT+R)"><i className="fa fa-align-right"></i></button><button type="button" className="btn btn-default btn-sm btn-small" title="" data-event="justifyFull"  data-original-title="Justify full (CTRL+SHIFT+J)"><i className="fa fa-align-justify"></i></button></div><div className="note-list btn-group"><button type="button" className="btn btn-default btn-sm btn-small" title="" data-event="indent"  data-original-title="Indent (CTRL+])"><i className="fa fa-indent"></i></button><button type="button" className="btn btn-default btn-sm btn-small" title="" data-event="outdent"  data-original-title="Outdent (CTRL+[)"><i className="fa fa-outdent"></i></button></div></div></div>    
                        </div>
                       <div className="note-editable textbox-comp"></div>
                    </div>

                       <button className="btn btn-danger btn-md pull-right margin-cash"><i className="fa fa-paper-plane"></i> Send</button>
                       <button className="btn btn-success btn-md pull-right margin-cash"><i className="fa fa-save"></i> Save</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>

)

export default Compose;