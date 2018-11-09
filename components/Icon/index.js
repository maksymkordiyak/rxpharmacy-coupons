import React, {Component} from 'react';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';

export const Icon = ({name, size, color}) => (
    name && <MaterialIcons name={name} size={color || 32} color={color || "#ffffff"}/>
);