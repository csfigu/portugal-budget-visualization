<?php
// $Id: gvs.views.inc,v 1.1 2010/03/04 08:55:30 btomic Exp $
/**
 * @file
 */

function gvs_views_plugins() {
  return array(
    'style' => array(
      'gvs' => array(
        'title' => t('GVS'),
        'theme' => 'gvs_view_gvs',
        'help' => t('gvs.'),
        'handler' => 'gvs_plugin_style_gvs',
        'uses row plugin' => TRUE,
        'uses options' => TRUE,
        'type' => 'normal',
      ),
    ),
  );
}
