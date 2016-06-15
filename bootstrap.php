<?php

use Illuminate\Contracts\Events\Dispatcher;
use Sijad\Spoiler\Alert\Listener;

return function (Dispatcher $events) {
    $events->subscribe(Listener\AddClientAssets::class);
    $events->subscribe(Listener\AddBBCode::class);
};
