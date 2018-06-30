// Generated by CoffeeScript 1.6.3
(function() {
  var initialize, registerHylePanelEvents, registerSubscriptionFieldEvents, sendAjaxRequest;

  initialize = function() {
    registerSubscriptionFieldEvents();
    return registerHylePanelEvents();
  };

  registerHylePanelEvents = function() {
    var codes, i;
    codes = [];
    i = 0;
    $(".js-hyle-panel pre").each(function() {
      return codes.push($(this));
    });
    $(".js-hyle-panel-next").click(function() {
      i++;
      if (i > codes.length - 1) {
        i = 0;
      }
      $(".js-hyle-panel pre").addClass("hidden");
      return codes[i].removeClass("hidden");
    });
    return $(".js-hyle-panel-prev").click(function() {
      if (i > 0) {
        i--;
        $(".js-hyle-panel pre").addClass("hidden");
        return codes[i].removeClass("hidden");
      }
    });
  };

  registerSubscriptionFieldEvents = function() {
    var initialValue;
    initialValue = null;
    $(".js-field-subscription").on("focusin", function() {
      if (initialValue === null) {
        initialValue = $(this).attr("value");
      }
      $(this).removeClass("field-error");
      if ($(this).val() === initialValue) {
        return $(this).val("");
      }
    });
    $(".js-field-subscription").on("focusout", function() {
      if ($(this).val() === "") {
        return $(this).val(initialValue);
      }
    });
    return $(".js-form-subscription").on("submit", function(e) {
      $(this).find(".icon-ok").removeClass("icon-ok").addClass("icon-spinner icon-spin");
      sendAjaxRequest($(this).attr("action"), $(this).attr("method"), {
        email: $("[name='email']").val()
      });
      e.preventDefault();
      return false;
    });
  };

  sendAjaxRequest = function(url, method, data) {
    console.log("sendAjaxRequest (" + url + ", " + method + ", " + data.email + ")");
    return $.ajax({
      url: url,
      type: method,
      data: data,
      dataType: "script"
    });
  };

  $(initialize);

}).call(this);
