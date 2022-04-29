use super::{
  account::*,
  arg::SwapV0Args  
};
use crate::state::*;
use anchor_lang::prelude::*;
use anchor_spl::token::{Mint, Token, TokenAccount};

#[derive(Accounts)]
pub struct SwapTargetV0<'info> {
  pub common: SwapV0<'info>,
}

pub fn handler(ctx: Context<SwapTargetV0>, args: SwapV0Args) -> Result<()> {
  // TODO
  Ok(())
}