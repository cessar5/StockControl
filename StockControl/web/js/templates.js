this["Templates"] = this["Templates"] || {};
this["Templates"]["auditEntry"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (Date, Helpers, index, log) {
buf.push("<li" + (jade.cls(["" + (index % 2 == 1 ? 'timeline-inverted' : '') + ""], [true])) + "><div" + (jade.cls(['timeline-badge',(Helpers.GetAuditInfo(log).Colour)], [null,true])) + "><i" + (jade.cls(['fa',"fa fa-" + (Helpers.GetAuditInfo(log).Icon) + ""], [null,true])) + "></i></div><div" + (jade.attr("id", "" + (log.Id) + "", true, false)) + " class=\"timeline-panel\"><div class=\"timeline-heading\"><h4 class=\"timeline-title\">" + (jade.escape((jade_interp = Helpers.GetAuditInfo(log).Title) == null ? '' : jade_interp)) + "</h4><p><small class=\"text-muted\">" + (jade.escape((jade_interp = new Date(log.Timestamp).toUTCString()) == null ? '' : jade_interp)) + "</small></p></div><div class=\"timeline-body\"><p>" + (jade.escape((jade_interp = log.Message) == null ? '' : jade_interp)) + "</p></div></div></li>");}.call(this,"Date" in locals_for_with?locals_for_with.Date:typeof Date!=="undefined"?Date:undefined,"Helpers" in locals_for_with?locals_for_with.Helpers:typeof Helpers!=="undefined"?Helpers:undefined,"index" in locals_for_with?locals_for_with.index:typeof index!=="undefined"?index:undefined,"log" in locals_for_with?locals_for_with.log:typeof log!=="undefined"?log:undefined));;return buf.join("");
};
this["Templates"]["modalDialog"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (dialog) {
buf.push("<div" + (jade.attr("id", dialog.Id, true, false)) + " tabindex=\"-1\" role=\"dialog\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button data-dismiss=\"modal\" class=\"close\"><span>&times;</span></button><h4 class=\"modal-title\">" + (jade.escape((jade_interp = dialog.Title) == null ? '' : jade_interp)) + "</h4></div><div class=\"modal-body\"><p>" + (jade.escape((jade_interp = dialog.Message) == null ? '' : jade_interp)) + "</p></div><div class=\"modal-footer\"><button data-dismiss=\"modal\" class=\"btn btn-default\">Close</button><button" + (jade.attr("onclick", dialog.OnClick, true, false)) + " data-dismiss=\"modal\" class=\"btn btn-primary btn-ok\">" + (jade.escape((jade_interp = dialog.ButtonLabel) == null ? '' : jade_interp)) + "</button></div></div></div></div>");}.call(this,"dialog" in locals_for_with?locals_for_with.dialog:typeof dialog!=="undefined"?dialog:undefined));;return buf.join("");
};
this["Templates"]["notification"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (Date, Helpers, item) {
buf.push("<a" + (jade.attr("href", "/audit?id=" + (item.Id) + "", true, false)) + " style=\"display:block;\" class=\"list-group-item\"><i" + (jade.cls(["fa fa-" + (Helpers.GetAuditInfo(item).Icon) + ""], [true])) + "></i> " + (jade.escape((jade_interp = Helpers.GetAuditInfo(item).Title) == null ? '' : jade_interp)) + "<span" + (jade.attr("data-time", "" + (new Date(item.Timestamp).getTime()) + "", true, false)) + " class=\"pull-right text-muted small\">" + (jade.escape((jade_interp = Helpers.FormatDate(new Date(item.Timestamp))) == null ? '' : jade_interp)) + "</span></a>");}.call(this,"Date" in locals_for_with?locals_for_with.Date:typeof Date!=="undefined"?Date:undefined,"Helpers" in locals_for_with?locals_for_with.Helpers:typeof Helpers!=="undefined"?Helpers:undefined,"item" in locals_for_with?locals_for_with.item:typeof item!=="undefined"?item:undefined));;return buf.join("");
};
this["Templates"]["stockGroup"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (group, key, undefined) {
buf.push("<div" + (jade.attr("data-groupid", "" + (key) + "", true, false)) + " onclick=\"toggleGroup(this)\" class=\"panel-heading stock-group-heading\"><span>" + (jade.escape((jade_interp = group.Name) == null ? '' : jade_interp)) + "</span><i class=\"fa fa-chevron-up pull-right text-muted\"></i><i class=\"fa fa-chevron-down pull-right text-muted\"></i></div><ul" + (jade.attr("data-groupid", "" + (key) + "", true, false)) + " class=\"list-group stock-group\">");
// iterate group.Items
;(function(){
  var $$obj = group.Items;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li" + (jade.attr("data-stockid", "" + (item.Id) + "", true, false)) + " class=\"list-group-item stock-item\"><button" + (jade.attr("onclick", "Inventory.IssueStock(" + (item.Id) + ")", true, false)) + " title=\"Release 1 item from inventory\"" + (jade.attr("disabled", (item.Quantity == 0 ? 'disabled' : null), true, false)) + " class=\"btn btn-primary pull-right\"><i class=\"fa fa-gbp\"></i> Issue</button><h3 class=\"name\">" + (jade.escape((jade_interp = item.Name) == null ? '' : jade_interp)) + "</h3><div class=\"quantity\">In Stock: " + (jade.escape((jade_interp = item.Quantity) == null ? '' : jade_interp)) + "</div></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li" + (jade.attr("data-stockid", "" + (item.Id) + "", true, false)) + " class=\"list-group-item stock-item\"><button" + (jade.attr("onclick", "Inventory.IssueStock(" + (item.Id) + ")", true, false)) + " title=\"Release 1 item from inventory\"" + (jade.attr("disabled", (item.Quantity == 0 ? 'disabled' : null), true, false)) + " class=\"btn btn-primary pull-right\"><i class=\"fa fa-gbp\"></i> Issue</button><h3 class=\"name\">" + (jade.escape((jade_interp = item.Name) == null ? '' : jade_interp)) + "</h3><div class=\"quantity\">In Stock: " + (jade.escape((jade_interp = item.Quantity) == null ? '' : jade_interp)) + "</div></li>");
    }

  }
}).call(this);

buf.push("</ul>");}.call(this,"group" in locals_for_with?locals_for_with.group:typeof group!=="undefined"?group:undefined,"key" in locals_for_with?locals_for_with.key:typeof key!=="undefined"?key:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
};
this["Templates"]["stockItem"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (item) {
buf.push("<li" + (jade.attr("data-stockid", "" + (item.Id) + "", true, false)) + " class=\"list-group-item stock-item\"><button" + (jade.attr("onclick", "Inventory.IssueStock(" + (item.Id) + ")", true, false)) + " title=\"Release 1 item from inventory\"" + (jade.attr("disabled", (item.Quantity == 0 ? 'disabled' : null), true, false)) + " class=\"btn btn-primary pull-right\"><i class=\"fa fa-gbp\"></i> Issue</button><h3 class=\"name\">" + (jade.escape((jade_interp = item.Name) == null ? '' : jade_interp)) + "</h3><div class=\"quantity\">In Stock: " + (jade.escape((jade_interp = item.Quantity) == null ? '' : jade_interp)) + "</div></li>");}.call(this,"item" in locals_for_with?locals_for_with.item:typeof item!=="undefined"?item:undefined));;return buf.join("");
};