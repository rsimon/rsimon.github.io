window.toponymotator = { }

window.toponymotator.editform = {
  open : function(anchor) {
    var w = Ext.create('Ext.window.Window', {
      title: 'New Toponym',
      height: 52,
      width: 200,
      layout: 'hbox',
      frame: false,
      border: false,
      closable: true,
      items: [
        Ext.create('Ext.form.field.Text', {
          name: 'transcribe',
          emptyText: 'Transcribe...',
          width: 150
        }),

        Ext.create('Ext.Button', {
          text: 'OK',
          width: 40, 
          handler: function() {
            w.close();
          }
        })
      ]
    });
    w.showAt(anchor.x - 100, anchor.y);
  }
}
