package com.okode.dynatrace;

import com.getcapacitor.Plugin;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Dynatrace")
public class DynatracePlugin extends Plugin {

    private Dynatrace implementation = new Dynatrace();
}
