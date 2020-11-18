<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Sticky\Listener;

use Flarum\Api\Controller\ListDiscussionsController;
use Flarum\Api\Event\WillGetData;
use Illuminate\Contracts\Events\Dispatcher;

class AddApiAttributes
{
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(WillGetData::class, [$this, 'includeFirstPost']);
    }

    /**
     * @param WillGetData $event
     */
    public function includeFirstPost(WillGetData $event)
    {
        if ($event->isController(ListDiscussionsController::class)) {
            $event->addInclude('firstPost');
        }
    }
}
