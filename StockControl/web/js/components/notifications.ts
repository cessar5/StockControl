﻿$(document).ready(function ()
{
  Notifications.NotificationEvent.Subscribe(function (data: IAuditEntry)
  {
    var $entry = $(Templates["notification"]({ item: data })).hide().addClass("new");

    $("#lstNotifications").prepend($entry);

    $("#lstNotifications a").last().slideUp(200, function () { $(this).remove(); });

    $entry.slideDown(200);

    $entry.on("mouseover", function () { $(this).removeClass("new"); });    
  });
});