function PbDialog(containerId, removeDialogContainerOnClose, options)
{
    var self = this;
    self.Container = $("#" + containerId);
    self.Options = options || {};

    self.RemoveDialogContainerOnClose = removeDialogContainerOnClose;

    self.CloseDialog = function () {
        self.Container.dialog("close");
        self.Container.dialog("destroy");

        if (self.RemoveDialogContainerOnClose)
        {
            self.RemoveDialogContainer();
        }
    }

    self.RemoveDialogContainer = function () {
        self.Container.remove();
    }

    self.Buttons = [{ text: "Close", click: self.CloseDialog }];

    self.OpenDialog = function()
    {
        var multiplier = self.Options.sizeMultiplier || 0.5;
        self.Container.dialog({
            autoOpen: false,
            resizable: false,
            height: window.innerHeight * multiplier,
            width: window.innerWidth * multiplier,
            modal: true,
            show: {
                effect: "fade",
                duration: 500
            },
            hide: {
                effect: "fade",
                duration: 500
            },
            buttons: self.Buttons
        });

        self.Container.dialog("open");
    }

    self.CreateDialogContainer = function (dialogAttributes)
    {
        if (!self.Container[0]) {
            self.Container = $('<div>').attr({
                id: self.Container.attr("id")
            });

            self.Container.attr(dialogAttributes);
            $("body").append(self.Container);
        }
    }
}