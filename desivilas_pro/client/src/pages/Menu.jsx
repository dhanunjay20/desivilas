import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';


// Animated background (ShaderGradient) — using the exact URL provided
const SHADER_URL =
  'https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=2.9&cPolarAngle=120&cameraZoom=1&color1=%23ebedff&color2=%23f3f2f8&color3=%23dbf8ff&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=1.8&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=-90&shader=defaults&type=waterPlane&uDensity=1&uFrequency=5.5&uSpeed=0.3&uStrength=3&uTime=0.2&wireframe=false&zoomOut=false';

// Data (unchanged)
const menuData = [
  // ... keep your existing categories and items here exactly ...
  {
    category: 'Appetizers',
    url: 'https://www.desivilas.com/order#categoryHeading-1187268',
    items: [
      { name: 'Gobi Manchurian', description: 'Crispy cauliflower florets tossed in tangy Manchurian sauce.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758537885/gobi_manchurian_piwpeg.jpg' },
      { name: 'Chicken 65', description: 'Spicy deep-fried chicken bites with curry leaves.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758538307/Chicken_65_a0c5ei.jpg' },
      { name: 'Garlic Butter Chicken', description: 'Succulent chicken cooked in garlic butter sauce.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758538464/garlic-butter-chicken_cy3phy.webp' },
      { name: 'Shrimp 65', description: 'Crispy fried shrimp spiced just right.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758540545/Shrimp_65_s9kfkn.webp' },
      { name: 'Chilli Prawn', description: 'Prawns stir-fried with chillies and spices.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758539556/chilli_prawn_ilaurn.webp' },
    ],
  },
  {
    category: 'Beverage',
    url: 'https://www.desivilas.com/order#categoryHeading-1187269',
    items: [
      { name: 'Chickoo Milkshake', description: 'Sweet and creamy chickoo fruit milkshake.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758588737/chickoo_milkshake_pnpsvl.webp' },
      { name: 'Masala Tea', description: 'Traditional Indian spiced tea.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758588736/Masala_tea_wltrsu.jpg' },
      { name: 'Diet Coke', description: 'Chilled diet coke for refreshment.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758590884/Diet_Coke_krsmiw.webp' },
      { name: 'Goli Soda Orange', description: 'Orange-flavored sparkling soda.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758589071/Goil_soda_orange_bjnifb.webp' },
      { name: 'Goli Soda Virgin Mojito', description: 'Refreshing virgin mojito soda.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758588738/Goli_sode_virgin_mojito_k6ntdw.webp' },
      { name: 'Goli Soda Clear Lemon', description: 'Zesty clear lemon soda.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758590419/Goli_Soda_Clear_Lemon_hqs48c.webp' },
      { name: 'Goli Soda Jeera', description: 'Spiced jeera flavored soda.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758590418/Goli_Soda_Jeera_jlv1cl.webp' },
      { name: 'Mango Lassi', description: 'Sweet mango yogurt drink.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758540069/mango_lassi_doqred.jpg' },
      { name: 'Badam Milk', description: 'Almond flavored milkshake.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758540269/badam_milk_uqii4a.jpg' },
      { name: 'Coke Tin', description: 'Classic chilled coke in a tin.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758590265/coke_fkoxtx.jpg' },
      { name: 'Small Tea', description: 'Small cup of hot Indian tea.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758589556/small_tea_fajpoh.webp' },
      { name: 'Thums Up', description: 'Popular Indian cola drink.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758540720/thums_up_ybard3.jpg' },
      { name: 'Fanta Tin', description: 'Orange flavoured soda in a tin.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758540196/fanta_tavlub.jpg' },
      { name: 'Punjabi Lassi', description: 'Traditional yogurt drink from Punjab.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758588970/pujabi_lassi_xfclgn.jpg' },
    ],
  },
  {
    category: 'Breakfast',
    url: 'https://www.desivilas.com/order#categoryHeading-1187262',
    items: [
      { name: 'Mysore Bonda', description: 'Light and fluffy fried rice flour balls.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758541751/Mysore_bonda_zocyuy.jpg' },
      { name: 'Sambar extra 8oz', description: 'Extra portion of tangy lentil stew.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758541567/sambar_r7dse2.jpg' },
    ],
  },
  {
    category: 'Naan',
    url: 'https://www.desivilas.com/order#categoryHeading-1187267',
    items: [
      { name: 'Plain Naan', description: 'Traditional Indian flatbread.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758543273/Plain_naan_skdp1j.webp' },
      { name: 'Garlic Naan', description: 'Flatbread infused with garlic.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758543308/garilc_naan_tpu0cm.webp' },
      { name: 'Butter Naan', description: 'Soft naan with a butter coating.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758542229/butter_naan_jmpar7.jpg' },
      { name: 'Bullet Naan', description: 'Spicy stuffed variant of naan.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758542226/Bullet-Naan_bjdgpa.jpg' },
      { name: 'Chilli Garlic Naan', description: 'Naan topped with chilli and garlic.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758542233/chilli_garlic_naan_fsxsyp.jpg' },
    ],
  },
  {
    category: 'Curries',
    url: 'https://www.desivilas.com/order#categoryHeading-1187266',
    items: [
      { name: 'Butter Chicken or Chicken Tikka Masala Half (12OZ)', description: 'Creamy tomato based curry with boneless chicken and rich Indian spices.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758534028/Butter_chicken_abaa1o.jpg' },
      { name: 'Butter Chicken or Chicken Tikka Masala Full (24OZ)', description: 'Creamy tomato based curry with boneless chicken and rich Indian spices.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758534122/Chicken_Tikka_Masala_full_k3e2qo.jpg' },
      { name: 'Paneer Tikka Masala or Paneer Butter Masala Full (24 OZ)', description: 'Rich paneer curry cooked in traditional spices.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758534326/Paneer_Butter_Masala_full_ijenm2.jpg' },
      { name: 'Sambar Half', description: 'Traditional tangy lentil stew.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758534490/samber_half_vonyei.jpg' },
      { name: 'Sambar Full', description: 'Full portion of sambar.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758534560/Sambar_full_vlja6v.jpg' },
      { name: 'Paneer Tikka Masala or Paneer Butter Masala Half (12OZ)', description: 'Half portion rich paneer curry.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758537488/paneer_biryani_1_1_nvgdho.jpg' },
      { name: 'Chicken Curry of the Day Half', description: 'Daily special chicken curry half portion.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758538753/chicken_curry_half_ydo00j.jpg' },
      { name: 'Chicken Curry of the Day Full', description: 'Daily special chicken curry full portion.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758535308/chicken_Curry_full_ncujyw.jpg' },
    ],
  },
  {
    category: 'Rice Specials',
    url: 'https://www.desivilas.com/order#categoryHeading-1187265',
    items: [
      { name: 'Chicken Fry Piece Biryani Boneless', description: 'Aromatic biryani with boneless chicken.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758535674/chicken_fry_piece_biryani_bonelss_2_qwyrc0.jpg' },
      { name: 'Boneless Chicken Biryani', description: 'Fragrant rice cooked with spices and chicken.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758535750/Boneless_Chicken_Biryani_f18dto.jpg' },
      { name: 'Mixed Veg. Biryani', description: 'Biryani loaded with assorted vegetables.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758535796/mixed_veg_biryani_qzhohx.jpg' },
      { name: 'Paneer Biryani', description: 'Spiced biryani with cubes of paneer.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758535849/paneer_biryani_1_gdde2i.jpg' },
      { name: 'Pachimirchi Boneless Chicken Biryani', description: 'Fiery boneless chicken biryani.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758535935/pachimirchi_boneless_chicken_briyani_1_fkixyc.jpg' },
      { name: 'Chicken 65 Biryani', description: 'Biryani with spicy Chicken 65 pieces.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758535992/Chicken_65_Biryani_km9flg.jpg' },
      { name: 'Goat Fry Piece Biryani', description: 'Biryani with flavorful goat fry pieces.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758536064/goat_fry_piece_birayani_tpif2x.jpg' },
      { name: 'Curd rice', description: 'Comforting tangy curd with rice.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758536106/curad_rice_ti2oss.jpg' },
      { name: 'Pachimirchi Paneer Pulav', description: 'Spiced paneer pulav.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758536159/pachimrichi_paneer_pulavu_uph6oe.jpg' },
      { name: 'Pachimirchi Paneer Biryani', description: 'Spiced paneer biryani.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758536210/pachimirchi_panner_biryani_ums6bj.jpg' },
      { name: 'Festival Combo', description: 'Special festival combo platter.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758537812/festival_combo_lznurn.jpg' },
      { name: 'Ambur Mutton Fry Piece Biryani', description: 'Mutton biryani with Ambur style fry.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758537709/Ambur_mutton_fry_pieces_biryani_gvr5zv.jpg' },
      { name: 'Chilli Chustnut Manchurian', description: 'Spiced chilli chestnut Manchurian.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758537757/chilli_chestnut_manchurian_kmvgdf.jpg' },
    ],
  },
  {
    category: 'Desserts',
    url: 'https://www.desivilas.com/order#categoryHeading-1187264',
    items: [
      { name: 'Gulab Jamun (4)', description: 'Soft milk dumplings soaked in rose syrup.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758536409/Gulab_jamun_4-01_kmpr38.jpg' },
      { name: 'Gulab Jamun (1)', description: 'Single milk dumpling dessert.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758536611/gulab_jamun_1_py1uev.jpg' },
      { name: 'Rasmalai', description: 'Milk cakes in sweetened condensed milk.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758536944/Rasmalai_f5u3kv.jpg' },
      { name: 'Apricot Delight', description: 'Sweet apricot dessert.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758536987/Apricot_delight_dd4acb.jpg' },
    ],
  },
  {
    category: 'Lunch Specials',
    url: 'https://www.desivilas.com/order#categoryHeading-1187263',
    description: 'Lunch combos only on week days from 11 AM to 2 PM',
    items: [
      { name: 'Extra Naan In Lunch', description: 'Additional naan bread for lunch combos.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758537132/extra_naan_in_lunch_4_mlk2le.jpg' },
      { name: 'Millet Veg Combo', description: 'Healthy millet with vegetable combo.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758537171/millet_veg_combo_dxag76.jpg' },
    ],
  },
  {
    category: 'Snacks',
    url: 'https://www.desivilas.com/order#categoryHeading-1200741',
    description: 'Available Daily from 4:00 PM to 8:30 PM',
    items: [
      { name: 'Samosa 1 Piece', description: 'Crispy potato stuffed snack.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758534373/samosa_1piece_vexp98.jpg' },
      { name: 'Samosa 3 Piece', description: 'Three piece samosa platter.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758534641/samosa_3_pieces_tjyztl.jpg'},
      { name: 'Onion Samosa(4)', description: 'Four onion filled samosas.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758534765/onion_samosa_4_qytyps.jpg' },
      { name: 'Punugulu', description: 'Fried lentil batter bites.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758534863/Punugulu_fy0caa.jpg' },
      { name: 'Aloo Samosa(3)', description: 'Potato stuffed samosas.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758535659/Aloo_samosa_3_sqrnyj.jpg' },
      { name: 'Stuffed Mirchi Bajji (4)', description: 'Stuffed chili fritters.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758535158/stuffed_mirchii_baji_sr4ctm.jpg' },
      { name: 'Mirchi Bajji (4)', description: 'Crispy chili fritters.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758535298/mirchi_bajji_1_pibaga.jpg' },
      { name: 'Aloo Samosa(1)', description: 'Single potato samosa.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758535412/Aloo_Samosa_ln3vgn.jpg' },
      { name: 'Stuffed Mirchi Bajji (1)', description: 'Single stuffed chili fritter.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758535734/stffed_Mirchi_Bajji_1_vr9i9d.jpg' },
      { name: 'Snacks Platter', description: 'Mixed platter of assorted snacks.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758537913/snacks_platter_s9cmjn.jpg' },
      { name: 'Chudava(Atukulu)', description: 'Thin crispy rice flakes.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758535964/Atukulu_nt919v.jpg' },
      { name: 'Soryakaya/Anapakaya/Bottle guard vada', description: 'Crispy bottle gourd fritters.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758536050/Sorakaya_1_pz9brd.jpg' },
      { name: 'Dahi Puri', description: 'Puffed puris with yogurt and chutneys.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758536206/Dahi_Puri_1_ikcurg.jpg' },
      { name: 'Pani Puri Plate', description: 'Water filled puris with flavor.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758536309/Pani_Puri_1_z5d3it.jpg' },
      { name: 'Bhel Puri', description: 'Spicy puffed rice mixture.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758536381/Bhel_Puri_bzyn4p.jpg' },
      { name: 'Sev Puri', description: 'Crunchy sev topped puris.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758536483/sev_puri_o2rueh.jpg' },
      { name: 'Aloo Chat', description: 'Spiced potato chat.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758536551/Aloo_Chaat_bpltxs.jpg' },
      { name: 'Corn Chips', description: 'Savory crispy corn chips.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758536605/Corn_Chips_xjvaqf.jpg' },
    ],
  },
  {
    category: 'Add On',
    url: 'https://www.desivilas.com/order#categoryHeading-1207005',
    items: [
      { name: 'Salan', description: 'Spicy curry sauce.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758539334/saaln_v9fd08.jpg' },
      { name: 'Raitha', description: 'Cooling yogurt condiment.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758538088/Raita_qhexpk.jpg' },
    ],
  },
  {
    category: 'Dosa',
    url: 'https://www.desivilas.com/order#categoryHeading-1216859',
    description: 'All items in this category must be ordered at least 0.5 hours in advance. Available from 9.30 AM to 9 PM',
    items: [
      { name: 'Ghee Dosa', description: 'Buttery crisp dosa.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758538160/Ghee_dosa_ewtput.jpg' },
      { name: 'Masala Dosa', description: 'Dosa filled with spiced potatoes.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758538206/Masala__Dosa_sjclet.jpg' },
      { name: 'Mysore Masala Dosa', description: 'Spicy Mysore style masala dosa.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758538281/Mysore_Masala_Dosa_eu41d6.jpg' },
      { name: 'Onion Dosa', description: 'Dosa with fresh onion topping.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758538330/onion_dosa_ae5onq.jpg' },
      { name: 'Plain Dosa', description: 'Classic plain dosa.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758538373/plain_Dosa_kslafu.jpg' },
      { name: 'Set Dosa', description: 'Soft multi-layered dosa set.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758538427/set_dosa_lill4g.jpg' },
      { name: 'Rava Dosa', description: 'Semolina crisp dosa.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758538478/Rawa_dosa_2_vfbprb.jpg' },
      { name: 'Onion Rava Dosa', description: 'Semolina dosa topped with onions.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758538534/Onion_Rava_Dosa_zogvz5.jpg' },
      { name: 'Onion Masala Rava Dosa', description: 'Masala filled onion rava dosa.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758538585/Onion__Rava_Masala_Dosa_ikfpp4.jpg' },
      { name: 'Plain Uttapam', description: 'Thick pancake with minimal toppings.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758538640/plain_uttapam_mawfnb.jpg' },
      { name: 'Mixed Veg Uttapam', description: 'Uttapam topped with mixed vegetables.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758538692/Mix_Veg_Uttapam_xxz7rc.jpg' },
      { name: 'Onion Uttapam', description: 'Thick uttapam topped with onions.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758538733/Onion_Uttapam_mrc8uq.jpg' },
      { name: 'Karam Podi Dosa', description: 'Spicy dosa with chili powder.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758538789/karam_podi_dosa_rljabg.jpg' },
      { name: 'Cheese Dosa', description: 'Dosa stuffed with cheese.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758538789/karam_podi_dosa_rljabg.jpg' },
      { name: 'Paneer Dosa', description: 'Dosa stuffed with paneer.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758538884/Paneer__Dosa_1_mfewlm.jpg' },
      { name: 'Egg Dosa', description: 'Dosa topped with egg.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758538934/Egg_Dosa_gadnx0.jpg' },
      { name: 'Masala Rava Dosa', description: 'Spiced semolina dosa.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758539028/masala_rava_dosa_1_cixqby.jpg' },
      { name: 'Ghee Karam Dosa', description: 'Buttery spicy dosa.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758539069/Ghee_Karam_Dosa_or24eq.jpg' },
    ],
  },
  {
    category: 'Catering',
    url: 'https://www.desivilas.com/order#categoryHeading-1229718',
    items: [
      { name: 'Poornam Boorelu - half tray', description: 'Sweet stuffed dumplings, half tray.', image: 'https://res.cloudinary.com/djoq264q0/image/upload/v1758539235/poornam_boorelu__half_tray_c2l4tb.jpg' },
    ],
  },
];

/* Variants */
const sectionFade = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const listContainer = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
};
const listItem = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120 } },
};

/* Smooth scroll helper respecting sticky headers */
function scrollIntoViewWithOffset(el, offset = 90) {
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const absoluteY = window.scrollY + rect.top - offset;
  window.scrollTo({ top: absoluteY, behavior: 'smooth' });
}

export default function MenuPage() {
  const [expanded, setExpanded] = useState(null);
  const itemRefs = useRef({}); // map category -> ref

  useEffect(() => {
    if (expanded && itemRefs.current[expanded]) {
      const id = window.setTimeout(() => {
        scrollIntoViewWithOffset(itemRefs.current[expanded], 96);
      }, 40);
      return () => window.clearTimeout(id);
    }
  }, [expanded]);

  const toggleCategory = (cat) => setExpanded((prev) => (prev === cat ? null : cat));

  return (
    <main className="relative min-h-screen w-full max-w-[100vw] overflow-x-clip">
      {/* Global animated background (behind everything) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <ShaderGradientCanvas style={{ width: '100%', height: '100%' }}>
          <ShaderGradient control="query" urlString={SHADER_URL} />
        </ShaderGradientCanvas>
      </div>

      {/* Hero — simplified to let the shader show through */}
      <section className="relative h-[42vh] sm:h-[50vh] lg:h-[58vh] overflow-hidden">
        {/* Soft dark veil for text legibility */}
        <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          <p className="font-semibold text-orange-200">Fresh • Authentic • Crafted</p>
          <h1
            className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            style={{ fontFamily: 'serif' }}
          >
            Our Menu
          </h1>
          <p className="mt-3 max-w-2xl text-white/90">
            Explore every category—from breakfast classics and street‑style snacks to biryanis, dosas, and rich curries.
          </p>
        </motion.div>
      </section>

      {/* Menu */}
      <section className="relative mx-auto max-w-5xl px-6 md:px-10 lg:px-12 py-12">
        {menuData.map(({ category, items, url, description }) => {
          const isOpen = expanded === category;
          const panelId = `section-${category.replace(/\s+/g, '-')}`;
          const btnId = `btn-${category.replace(/\s+/g, '-')}`;

          return (
            <motion.article
              key={category}
              ref={(el) => (itemRefs.current[category] = el)}
              variants={sectionFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="mb-6 rounded-3xl bg-white/70 backdrop-blur-md ring-1 ring-black/5 shadow-xl"
            >
              <button
                id={btnId}
                onClick={() => toggleCategory(category)}
                className="group flex w-full items-center justify-between px-6 sm:px-8 py-5 sm:py-6 text-left"
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold ring-1 ring-orange-200">
                    {category.charAt(0)}
                  </span>
                  {/* underline removed; tasteful hover color only */}
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="truncate text-2xl sm:text-3xl font-semibold text-orange-700 hover:text-orange-800 transition-colors"
                    title={category}
                  >
                    {category}
                  </a>
                </div>
                <span className="ml-4 select-none text-3xl sm:text-4xl text-orange-500 group-hover:scale-110 transition-transform">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="panel"
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      variants={listContainer}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="px-6 sm:px-8 pb-8"
                    >
                      {description && (
                        <motion.p
                          className="mb-4 max-w-2xl text-sm italic text-gray-700"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          {description}
                        </motion.p>
                      )}

                      <motion.ul className="divide-y divide-gray-200 rounded-2xl bg-white/80 backdrop-blur ring-1 ring-gray-100 overflow-hidden">
                        {items.map(({ name, description, image }, idx) => (
                          <motion.li
                            key={`${name}-${idx}`}
                            variants={listItem}
                            className="flex flex-col items-start gap-4 p-4 sm:p-5 md:flex-row md:items-center hover:bg-orange-50/60 transition-colors"
                          >
                            <img
                              src={image || 'https://via.placeholder.com/120?text=No+Image'}
                              alt={name}
                              loading="lazy"
                              decoding="async"
                              className="h-20 w-28 max-w-full flex-shrink-0 rounded-lg object-cover ring-1 ring-gray-200"
                            />
                            <div className="min-w-0">
                              <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                              {description && (
                                <p className="mt-1 max-w-2xl text-sm text-gray-600">{description}</p>
                              )}
                            </div>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </section>
    </main>
  );
}
