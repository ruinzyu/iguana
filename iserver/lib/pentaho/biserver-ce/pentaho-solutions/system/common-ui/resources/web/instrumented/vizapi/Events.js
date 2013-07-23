/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['vizapi/Events.js']) {
  _$jscoverage['vizapi/Events.js'] = [];
  _$jscoverage['vizapi/Events.js'][10] = 0;
  _$jscoverage['vizapi/Events.js'][12] = 0;
  _$jscoverage['vizapi/Events.js'][15] = 0;
  _$jscoverage['vizapi/Events.js'][21] = 0;
  _$jscoverage['vizapi/Events.js'][24] = 0;
  _$jscoverage['vizapi/Events.js'][25] = 0;
  _$jscoverage['vizapi/Events.js'][27] = 0;
  _$jscoverage['vizapi/Events.js'][40] = 0;
  _$jscoverage['vizapi/Events.js'][41] = 0;
  _$jscoverage['vizapi/Events.js'][55] = 0;
  _$jscoverage['vizapi/Events.js'][57] = 0;
  _$jscoverage['vizapi/Events.js'][58] = 0;
  _$jscoverage['vizapi/Events.js'][59] = 0;
  _$jscoverage['vizapi/Events.js'][60] = 0;
  _$jscoverage['vizapi/Events.js'][62] = 0;
  _$jscoverage['vizapi/Events.js'][74] = 0;
  _$jscoverage['vizapi/Events.js'][76] = 0;
  _$jscoverage['vizapi/Events.js'][77] = 0;
  _$jscoverage['vizapi/Events.js'][78] = 0;
  _$jscoverage['vizapi/Events.js'][79] = 0;
  _$jscoverage['vizapi/Events.js'][81] = 0;
}
_$jscoverage['vizapi/Events.js'].source = ["<span class=\"c\">/*</span>","<span class=\"c\">pentaho.events</span>","","<span class=\"c\">An event handler</span>","","<span class=\"c\">author: James Dixon</span>","","<span class=\"c\">*/</span>","","pentaho <span class=\"k\">=</span> <span class=\"k\">typeof</span> pentaho <span class=\"k\">==</span> <span class=\"s\">\"undefined\"</span> <span class=\"k\">?</span> <span class=\"k\">{}</span> <span class=\"k\">:</span> pentaho<span class=\"k\">;</span>","","pentaho<span class=\"k\">.</span>events <span class=\"k\">=</span> <span class=\"k\">{}</span><span class=\"k\">;</span>","","<span class=\"c\">// an array of event listeners</span>","pentaho<span class=\"k\">.</span>events<span class=\"k\">.</span>listeners <span class=\"k\">=</span> <span class=\"k\">[];</span>","","<span class=\"c\">/*</span>","<span class=\"c\">    trigger</span>","<span class=\"c\">    Triggers an event by notifying all of the listeners that the event has occurred.</span>","<span class=\"c\">*/</span>","pentaho<span class=\"k\">.</span>events<span class=\"k\">.</span>trigger <span class=\"k\">=</span> <span class=\"k\">function</span><span class=\"k\">(</span> object<span class=\"k\">,</span> eventName<span class=\"k\">,</span> args <span class=\"k\">)</span> <span class=\"k\">{</span>","","    <span class=\"c\">// examine each listener</span>","    <span class=\"k\">for</span><span class=\"k\">(</span><span class=\"k\">var</span> lNo<span class=\"k\">=</span><span class=\"s\">0</span><span class=\"k\">;</span> lNo<span class=\"k\">&lt;</span>pentaho<span class=\"k\">.</span>events<span class=\"k\">.</span>listeners<span class=\"k\">.</span>length<span class=\"k\">;</span> lNo<span class=\"k\">++</span> <span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">if</span><span class=\"k\">(</span> pentaho<span class=\"k\">.</span>events<span class=\"k\">.</span>listeners<span class=\"k\">[</span>lNo<span class=\"k\">].</span>object <span class=\"k\">==</span> object <span class=\"k\">&amp;&amp;</span> pentaho<span class=\"k\">.</span>events<span class=\"k\">.</span>listeners<span class=\"k\">[</span>lNo<span class=\"k\">].</span>eventName <span class=\"k\">==</span> eventName <span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"c\">// the event matches this listener's object and event name</span>","            pentaho<span class=\"k\">.</span>events<span class=\"k\">.</span>listeners<span class=\"k\">[</span>lNo<span class=\"k\">].</span>func<span class=\"k\">(</span> args <span class=\"k\">);</span>","        <span class=\"k\">}</span>","    <span class=\"k\">}</span>","<span class=\"k\">}</span>","","<span class=\"c\">/*</span>","<span class=\"c\">    addListener</span>","<span class=\"c\">    Adds a listener for an event</span>","<span class=\"c\">    </span>","<span class=\"c\">    object      The object to listen to</span>","<span class=\"c\">    eventName   The name of the event to listen to</span>","<span class=\"c\">    func        The function to call when the event happens</span>","<span class=\"c\">*/</span>","pentaho<span class=\"k\">.</span>events<span class=\"k\">.</span>addListener <span class=\"k\">=</span> <span class=\"k\">function</span><span class=\"k\">(</span>object<span class=\"k\">,</span> eventName<span class=\"k\">,</span> func <span class=\"k\">)</span> <span class=\"k\">{</span>","    pentaho<span class=\"k\">.</span>events<span class=\"k\">.</span>listeners<span class=\"k\">.</span>push<span class=\"k\">(</span><span class=\"k\">{</span>","        object<span class=\"k\">:</span> object<span class=\"k\">,</span>","        eventName<span class=\"k\">:</span> eventName<span class=\"k\">,</span>","        func<span class=\"k\">:</span> func","    <span class=\"k\">}</span><span class=\"k\">);</span>","<span class=\"k\">}</span>","","<span class=\"c\">/*</span>","<span class=\"c\">    removeListener</span>","<span class=\"c\">    Removes a listener for an event</span>","<span class=\"c\">    </span>","<span class=\"c\">    object      The object to listen to</span>","<span class=\"c\">    eventName   The name of the event to listen to</span>","<span class=\"c\">*/</span>","pentaho<span class=\"k\">.</span>events<span class=\"k\">.</span>removeListener <span class=\"k\">=</span> <span class=\"k\">function</span><span class=\"k\">(</span>object<span class=\"k\">,</span> eventName <span class=\"k\">)</span> <span class=\"k\">{</span>","","    <span class=\"k\">var</span> lNo <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">;</span>","    <span class=\"k\">while</span><span class=\"k\">(</span>lNo<span class=\"k\">&lt;</span>pentaho<span class=\"k\">.</span>events<span class=\"k\">.</span>listeners<span class=\"k\">.</span>length <span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">if</span><span class=\"k\">(</span> pentaho<span class=\"k\">.</span>events<span class=\"k\">.</span>listeners<span class=\"k\">[</span>lNo<span class=\"k\">].</span>object <span class=\"k\">==</span> object <span class=\"k\">&amp;&amp;</span> pentaho<span class=\"k\">.</span>events<span class=\"k\">.</span>listeners<span class=\"k\">[</span>lNo<span class=\"k\">].</span>eventName <span class=\"k\">==</span> eventName <span class=\"k\">)</span> <span class=\"k\">{</span>","            pentaho<span class=\"k\">.</span>events<span class=\"k\">.</span>listeners<span class=\"k\">.</span>splice<span class=\"k\">(</span>lNo<span class=\"k\">,</span><span class=\"s\">1</span><span class=\"k\">);</span>","        <span class=\"k\">}</span> <span class=\"k\">else</span> <span class=\"k\">{</span>","            lNo<span class=\"k\">++;</span>","        <span class=\"k\">}</span>","    <span class=\"k\">}</span>","    ","<span class=\"k\">}</span>","","<span class=\"c\">/*</span>","<span class=\"c\">    removeSource</span>","<span class=\"c\">    Removes all the listeners for the specified ibject</span>","<span class=\"c\">    </span>","<span class=\"c\">    object      The object to listen to remove</span>","<span class=\"c\">*/</span>","pentaho<span class=\"k\">.</span>events<span class=\"k\">.</span>removeSource <span class=\"k\">=</span> <span class=\"k\">function</span><span class=\"k\">(</span>object<span class=\"k\">)</span> <span class=\"k\">{</span>","","    <span class=\"k\">var</span> lNo <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">;</span>","    <span class=\"k\">while</span><span class=\"k\">(</span>lNo<span class=\"k\">&lt;</span>pentaho<span class=\"k\">.</span>events<span class=\"k\">.</span>listeners<span class=\"k\">.</span>length <span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">if</span><span class=\"k\">(</span> pentaho<span class=\"k\">.</span>events<span class=\"k\">.</span>listeners<span class=\"k\">[</span>lNo<span class=\"k\">].</span>object <span class=\"k\">==</span> object <span class=\"k\">)</span> <span class=\"k\">{</span>","            pentaho<span class=\"k\">.</span>events<span class=\"k\">.</span>listeners<span class=\"k\">.</span>splice<span class=\"k\">(</span>lNo<span class=\"k\">,</span><span class=\"s\">1</span><span class=\"k\">);</span>","        <span class=\"k\">}</span> <span class=\"k\">else</span> <span class=\"k\">{</span>","            lNo<span class=\"k\">++;</span>","        <span class=\"k\">}</span>","    <span class=\"k\">}</span>","    ","<span class=\"k\">}</span>"];
_$jscoverage['vizapi/Events.js'][10]++;
pentaho = (((typeof pentaho) == "undefined")? {}: pentaho);
_$jscoverage['vizapi/Events.js'][12]++;
pentaho.events = {};
_$jscoverage['vizapi/Events.js'][15]++;
pentaho.events.listeners = [];
_$jscoverage['vizapi/Events.js'][21]++;
pentaho.events.trigger = (function (object, eventName, args) {
  _$jscoverage['vizapi/Events.js'][24]++;
  for (var lNo = 0; (lNo < pentaho.events.listeners.length); (lNo++)) {
    _$jscoverage['vizapi/Events.js'][25]++;
    if (((pentaho.events.listeners[lNo].object == object) && (pentaho.events.listeners[lNo].eventName == eventName))) {
      _$jscoverage['vizapi/Events.js'][27]++;
      pentaho.events.listeners[lNo].func(args);
    }
}
});
_$jscoverage['vizapi/Events.js'][40]++;
pentaho.events.addListener = (function (object, eventName, func) {
  _$jscoverage['vizapi/Events.js'][41]++;
  pentaho.events.listeners.push({object: object, eventName: eventName, func: func});
});
_$jscoverage['vizapi/Events.js'][55]++;
pentaho.events.removeListener = (function (object, eventName) {
  _$jscoverage['vizapi/Events.js'][57]++;
  var lNo = 0;
  _$jscoverage['vizapi/Events.js'][58]++;
  while ((lNo < pentaho.events.listeners.length)) {
    _$jscoverage['vizapi/Events.js'][59]++;
    if (((pentaho.events.listeners[lNo].object == object) && (pentaho.events.listeners[lNo].eventName == eventName))) {
      _$jscoverage['vizapi/Events.js'][60]++;
      pentaho.events.listeners.splice(lNo, 1);
    }
    else {
      _$jscoverage['vizapi/Events.js'][62]++;
      (lNo++);
    }
}
});
_$jscoverage['vizapi/Events.js'][74]++;
pentaho.events.removeSource = (function (object) {
  _$jscoverage['vizapi/Events.js'][76]++;
  var lNo = 0;
  _$jscoverage['vizapi/Events.js'][77]++;
  while ((lNo < pentaho.events.listeners.length)) {
    _$jscoverage['vizapi/Events.js'][78]++;
    if ((pentaho.events.listeners[lNo].object == object)) {
      _$jscoverage['vizapi/Events.js'][79]++;
      pentaho.events.listeners.splice(lNo, 1);
    }
    else {
      _$jscoverage['vizapi/Events.js'][81]++;
      (lNo++);
    }
}
});