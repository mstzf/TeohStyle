<?php
/**
 * TeohStyle Plugin
 *
 * @package TeohStyle
 * @author TeohZY
 * @version 1.0.0
 * @link https://blog.teohzy.com
 */

if (!defined('__TYPECHO_ROOT_DIR__')) exit;

class TeohStyle_Plugin implements Typecho_Plugin_Interface
{
    public static function activate()
    {
        Typecho_Plugin::factory('Widget_Archive')->header = array('TeohStyle_Plugin', 'addHeader');
        Typecho_Plugin::factory('Widget_Archive')->footer = array('TeohStyle_Plugin', 'addFooter');
    }

    public static function deactivate() {}

    public static function config(Typecho_Widget_Helper_Form $form) {}

    public static function personalConfig(Typecho_Widget_Helper_Form $form) {}

    public static function addHeader()
    {
        $cssUrl = Helper::options()->pluginUrl . '/TeohStyle/custom.css';
        echo '<link rel="stylesheet" type="text/css" href="' . $cssUrl . '">';
    }

    public static function addFooter()
    {
        $jsUrl = Helper::options()->pluginUrl . '/TeohStyle/custom.js';
        echo '<script type="text/javascript" src="' . $jsUrl . '"></script>';
    }
}
?>

