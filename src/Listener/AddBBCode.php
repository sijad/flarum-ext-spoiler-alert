<?php
/*
 * (c) Sajjad Hashemian <wolaws@gmail.com>
 */

namespace Sijad\Spoiler\Alert\Listener;

use Flarum\Event\ConfigureFormatter;
use Illuminate\Contracts\Events\Dispatcher;

class AddBBCode
{
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureFormatter::class, [$this, 'addBBCode']);
    }

    /**
     * @param ConfigureFormatter $event
     */
    public function addBBCode(ConfigureFormatter $event)
    {
        // $event->configurator->BBCodes->addFromRepository('SPOILER');

        $event->configurator->BBCodes->addCustom(
            '[SPOILER]{TEXT}[/SPOILER]',
            '<div class="spoiler">{TEXT}</div>'
        );
    }
}
